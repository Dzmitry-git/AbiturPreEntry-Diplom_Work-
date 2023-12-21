//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "MainForm.h"
#include "RegistrationForm.h"
#include "ProgressForm.h"
#include "IniFiles.hpp"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TFormMain *FormMain;
//---------------------------------------------------------------------------

__fastcall TFormMain::TFormMain(TComponent* Owner)
   : TForm(Owner)
{
  TIniFile *Ini = new TIniFile(ExtractFilePath(Application->ExeName)+"Options.ini");

  WINDOWPLACEMENT  WindowPlacement;
  WindowPlacement.length = sizeof(WINDOWPLACEMENT);
  if (GetWindowPlacement(FormMain->Handle, &WindowPlacement))
  {
    FormMain->Left = Ini->ReadInteger("MainForm","Left", 0);
    FormMain->Top = Ini->ReadInteger("MainForm","Top", 0);
    FormMain->Height = Ini->ReadInteger("MainForm","Height", 0);
    FormMain->Width = Ini->ReadInteger("MainForm","Width", 0);
    FormMain->WindowState = (TWindowState)Ini->ReadInteger("MainForm","WindowState", 0);
  }

  ADOConnection->ConnectionString="Provider=SQLOLEDB.1;Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=" +
    Ini->ReadString("SQL","Database","Ошибка") + ";Data Source=" + Ini->ReadString("SQL","Server","Ошибка");
  ADOConnection->Connected = false;

  ((TStringGrid*)GridAudit)->ScrollBars = ssNone;
  ((TStringGrid*)GridGraphic)->ScrollBars = ssNone;
  ((TStringGrid*)GridObuchForma)->ScrollBars = ssNone;
  ((TStringGrid*)GridFacults)->ScrollBars = ssNone;
  ((TStringGrid*)GridSpecials)->ScrollBars = ssNone;
  ((TStringGrid*)GridSpecAuditoria)->ScrollBars = ssNone;

  TableAuditoria->Open();
  TableGraphic->Open();
  TableSpecAuditoria->Open();
  ADOQueryObuchForma->Open();
  ADOQueryFacults->Open();
  ADOQuerySpecials->Open();

  delete Ini;
}
//----------------------------------------------------------------------------

__fastcall TFormMain::~TFormMain()
{
  TIniFile *Ini = new TIniFile(ExtractFilePath(Application->ExeName)+"Options.ini");
  WINDOWPLACEMENT  WindowPlacement;
  WindowPlacement.length = sizeof(WINDOWPLACEMENT);
  if (GetWindowPlacement(FormMain->Handle, &WindowPlacement))
  {
    Ini->WriteInteger("MainForm","Left",WindowPlacement.rcNormalPosition.left);
    Ini->WriteInteger("MainForm","Top",WindowPlacement.rcNormalPosition.top);
    Ini->WriteInteger("MainForm","Height",WindowPlacement.rcNormalPosition.bottom-WindowPlacement.rcNormalPosition.top);
    Ini->WriteInteger("MainForm","Width",WindowPlacement.rcNormalPosition.right-WindowPlacement.rcNormalPosition.left);
    Ini->WriteInteger("MainForm","WindowState",FormMain->WindowState);
  }
  delete Ini;
}
//----------------------------------------------------------------------------




void __fastcall TFormMain::TableSpecAuditoriaAfterInsert(TDataSet *DataSet)
{
  TableSpecAuditoria->FieldByName("WorkPlaces")->AsInteger = 1;
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::ButtonCreateGraphicClick(TObject *Sender)
{
  if (MessageDlg("Вы хотите создать график (сведения о выполненных регистрациях будут удалены) ?", mtConfirmation, TMsgDlgButtons() << mbYes << mbNo,0) == mrYes)
  {
    ADOQueryRegistration->SQL->Clear();
    ADOQueryRegistration->SQL->Add("TRUNCATE TABLE Регистрация");
    ADOQueryRegistration->ExecSQL();

    int kol,i,j,IdPlanPriema, KodAuditorii, WorkPlace, NumSec = 1, count_WorkPlaces = 0;
    TDateTime StartTime, FinishTime, Time;
    double Dif, Dif_for_count = 0, step_for_PB, PB_Position = 0;
    String Data;
    ADOQuerySpecAuditoria->Open();


    //-----ПОДСЧЁТ КОЛИЧЕСТВА ЗАПИСЕЙ-----//
    ADOQueryRegistration->SQL->Clear();
    ADOQueryRegistration->SQL->Add("Select SUM(WorkPlaces) Count_WorkPlaces FROM SpecAuditoria");
    ADOQueryRegistration->Open();
    count_WorkPlaces = ADOQueryRegistration->FieldByName("Count_WorkPlaces")->AsInteger;  //-----ALL WORKPLACES-----//
    if (count_WorkPlaces == 0){
        MessageBox(NULL, "Отсутствуют секретари для приёма записи абутиентов. График не будет создан!",
                   "График предварительной записи", MB_OK);
        return;
    }

    TableGraphic->First();
    while (!TableGraphic->Eof){
        StartTime = TableGraphic->FieldByName("Start_Time")->AsDateTime;
        FinishTime = TableGraphic->FieldByName("Finish_Time")->AsDateTime;
        Dif_for_count += (double)(FinishTime - StartTime)*24*60/30;  //-----ABITURS PER DAY-----//
        TableGraphic->Next();
    }
    if (Dif_for_count == 0){
        MessageBox(NULL, "Отсутствует график работы секретарей. График не будет создан!",
                   "График предварительной записи", MB_OK);
        return;
    }
    step_for_PB = double(100)/(count_WorkPlaces*Dif_for_count);
    //-----ПОДСЧЁТ КОЛИЧЕСТВА ЗАПИСЕЙ-----//

    FormProgress->Position = poScreenCenter;
    FormProgress->Show();

    TableGraphic->First();
    while (!TableGraphic->Eof)
    {
        Data = TableGraphic->FieldByName("Data")->AsString;
        StartTime = TableGraphic->FieldByName("Start_Time")->AsDateTime;
        Time = StartTime;
        FinishTime = TableGraphic->FieldByName("Finish_Time")->AsDateTime;
        Dif = (double)(FinishTime - StartTime)*24*60/30;

        ADOQuerySpecAuditoria->First();
        while (!ADOQuerySpecAuditoria->Eof)
        {
            kol = ADOQuerySpecAuditoria->FieldByName("WorkPlaces")->AsInteger;
            IdPlanPriema = ADOQuerySpecAuditoria->FieldByName("IdPlanPriema")->AsInteger;
            KodAuditorii = ADOQuerySpecAuditoria->FieldByName("Kod_Auditorii")->AsInteger;
            NumSec = 1;
            for (i = 1; i <= kol; i++)
            {
                for (j = 1; j <= int(Dif); j++)
                {
                    ADOQueryRegistration->SQL->Clear();
                    ADOQueryRegistration->SQL->Add("INSERT INTO Регистрация(Дата, Время, Аудитория, IdPlanPriema, НомерРабочегоМеста)");
                    ADOQueryRegistration->SQL->Add("Values ('"+ Data +"','"+ Time +"',"+ KodAuditorii +","+ IdPlanPriema +","+ NumSec +")");
                    ADOQueryRegistration->ExecSQL();
                    Time += 0.02083333333;
                    PB_Position += step_for_PB;
                    FormProgress->PB->Position = PB_Position;
                }

                Time = StartTime;
                NumSec++;
            }
            ADOQuerySpecAuditoria->Next();
        }
        TableGraphic->Next();
    }
    MessageBox(NULL, "График успешно создан.",
               "График предварительной записи", MB_OK);
    FormProgress->PB->Position = 0;
    FormProgress->Close();
  }
}
//---------------------------------------------------------------------------

void __fastcall TFormMain::ButtonTableRagistrationClick(TObject *Sender)
{
    FormRegistration->DateTimePickerStart->Date = Now();
    FormRegistration->DateTimePickerEnd->Date = Now() + 1;
    FormRegistration->ShowModal();
}
//---------------------------------------------------------------------------




