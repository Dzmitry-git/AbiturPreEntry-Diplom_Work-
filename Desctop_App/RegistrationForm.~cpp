//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "RegistrationForm.h"
#include "MainForm.h"
#include "IniFiles.hpp"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TFormRegistration *FormRegistration;
//---------------------------------------------------------------------------
__fastcall TFormRegistration::TFormRegistration(TComponent* Owner)
  : TForm(Owner)
{
  TIniFile *Ini = new TIniFile(ExtractFilePath(Application->ExeName)+"Options.ini");

  WINDOWPLACEMENT  WindowPlacement;
  WindowPlacement.length = sizeof(WINDOWPLACEMENT);
  if (GetWindowPlacement(FormRegistration->Handle, &WindowPlacement))
  {
    FormRegistration->Left = Ini->ReadInteger("RegistrationForm","Left", 0);
    FormRegistration->Top = Ini->ReadInteger("RegistrationForm","Top", 0);
    FormRegistration->Height = Ini->ReadInteger("RegistrationForm","Height", 0);
    FormRegistration->Width = Ini->ReadInteger("RegistrationForm","Width", 0);
    FormRegistration->WindowState = (TWindowState)Ini->ReadInteger("RegistrationForm","WindowState", 0);
  }

  ((TStringGrid*)GridRegistration)->ScrollBars = ssNone;
  ((TStringGrid*)GridObuchFormaRegistration)->ScrollBars = ssNone;
  ((TStringGrid*)GridFacultsRegistration)->ScrollBars = ssNone;
  ((TStringGrid*)GridSpecialsRegistration)->ScrollBars = ssNone;

  ADOQueryTableRagisration->Open();
}

__fastcall TFormRegistration::~TFormRegistration()
{
  TIniFile *Ini = new TIniFile(ExtractFilePath(Application->ExeName)+"Options.ini");
  WINDOWPLACEMENT  WindowPlacement;
  WindowPlacement.length = sizeof(WINDOWPLACEMENT);
  if (GetWindowPlacement(FormRegistration->Handle, &WindowPlacement))
  {
    Ini->WriteInteger("RegistrationForm","Left",WindowPlacement.rcNormalPosition.left);
    Ini->WriteInteger("RegistrationForm","Top",WindowPlacement.rcNormalPosition.top);
    Ini->WriteInteger("RegistrationForm","Height",WindowPlacement.rcNormalPosition.bottom-WindowPlacement.rcNormalPosition.top);
    Ini->WriteInteger("RegistrationForm","Width",WindowPlacement.rcNormalPosition.right-WindowPlacement.rcNormalPosition.left);
    Ini->WriteInteger("RegistrationForm","WindowState",FormRegistration->WindowState);
  }
  delete Ini;
}
//---------------------------------------------------------------------------
void __fastcall TFormRegistration::ButtonSortFieldsRegistrationClick(
      TObject *Sender)
{
  int IdPlanPriema, KodFacult;
  ADOQueryTableRagisration->Close();
  ADOQueryTableRagisration->SQL->Clear();
  ADOQueryTableRagisration->SQL->Add("Select НомерПаспорта, Телефон, Дата, Время, Auditoria.Nazvanie, SPECIALS.ДляАнкеты,  НомерРабочегоМеста");
  ADOQueryTableRagisration->SQL->Add("From Регистрация, Auditoria, ПланПриема, SPECIALS");
  ADOQueryTableRagisration->SQL->Add("Where Регистрация.Аудитория = Auditoria.Kod and Регистрация.IdPlanPriema = ПланПриема.Id and ПланПриема.IdSpecial = SPECIALS.IdSpecial");

  //CheckBox Даты
  if (CheckBoxTime->Checked)
    ADOQueryTableRagisration->SQL->Add("and Дата Between '"+ DateTimePickerStart->Date +"' and '"+ DateTimePickerEnd->Date +"'");

  //CheckBox Факультета
  if (CheckBoxFacults->Checked)
  {
    KodFacult = FormMain->ADOQueryFacults->FieldByName("IdFacult")->AsInteger;
    ADOQueryTableRagisration->SQL->Add("and IdPlanPriema IN (Select Id From ПланПриема WHERE IdFacult = "+ IntToStr(KodFacult) +")");
  }

  //CheckBox Специальности
  if (CheckBoxSpecials->Checked)
  {
    IdPlanPriema = FormMain->ADOQuerySpecials->FieldByName("IdPlanPriema")->AsInteger;
    ADOQueryTableRagisration->SQL->Add("and IdPlanPriema = "+ IntToStr(IdPlanPriema) +"");
  }

  ADOQueryTableRagisration->Open();
}
//---------------------------------------------------------------------------
void __fastcall TFormRegistration::ButtonShowAllFieldsRegistrationClick(TObject *Sender)
{
  ADOQueryTableRagisration->Close();
  ADOQueryTableRagisration->SQL->Clear();
  ADOQueryTableRagisration->SQL->Add("Select НомерПаспорта, Дата, Время, Auditoria.Nazvanie, SPECIALS.ДляАнкеты,  НомерРабочегоМеста");
  ADOQueryTableRagisration->SQL->Add("From Регистрация, Auditoria, ПланПриема, SPECIALS");
  ADOQueryTableRagisration->SQL->Add("Where Регистрация.Аудитория = Auditoria.Kod and Регистрация.IdPlanPriema = ПланПриема.Id and ПланПриема.IdSpecial = SPECIALS.IdSpecial");
  ADOQueryTableRagisration->Open();
}
//---------------------------------------------------------------------------

void __fastcall TFormRegistration::CheckBoxTimeClick(TObject *Sender)
{
  if (CheckBoxTime->Checked)
  {
    DateTimePickerStart->Visible = true;
    DateTimePickerEnd->Visible = true;
  }
  else
  {
    DateTimePickerStart->Visible = false;
    DateTimePickerEnd->Visible = false;
  }
}
//---------------------------------------------------------------------------

void __fastcall TFormRegistration::CheckBoxFacultsClick(TObject *Sender)
{
  if (CheckBoxFacults->Checked)
  {
    GridObuchFormaRegistration->Visible = true;
    GridFacultsRegistration->Visible = true;
  }
  else
  {
    GridObuchFormaRegistration->Visible = false;
    GridFacultsRegistration->Visible = false;
    GridSpecialsRegistration->Visible = false;
    CheckBoxSpecials->Checked = false;
  }
}
//---------------------------------------------------------------------------

void __fastcall TFormRegistration::CheckBoxSpecialsClick(TObject *Sender)
{
  if (CheckBoxSpecials->Checked)
    GridSpecialsRegistration->Visible = true;
  else
    GridSpecialsRegistration->Visible = false;
}
//---------------------------------------------------------------------------

void __fastcall TFormRegistration::TimeFormTimer(TObject *Sender)
{
  if (CheckBoxTime->Checked || CheckBoxFacults->Checked || CheckBoxSpecials->Checked)
    ButtonSortFieldsRegistration->Enabled = true;
  else
    ButtonSortFieldsRegistration->Enabled = false;
}
//---------------------------------------------------------------------------

