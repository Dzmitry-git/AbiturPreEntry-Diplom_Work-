//---------------------------------------------------------------------------

#ifndef MainFormH
#define MainFormH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ADODB.hpp>
#include <DB.hpp>
#include <ExtCtrls.hpp>
#include <Buttons.hpp>
#include <ComCtrls.hpp>
#include <DBCtrls.hpp>
#include <DBTables.hpp>
#include <Grids.hpp>
#include <DBGrids.hpp>
//---------------------------------------------------------------------------
class TFormMain : public TForm
{
__published:	// IDE-managed Components
   TADOConnection *ADOConnection;
   TPanel *PanelMain;
   TPanel *PanelButtons;
   TPanel *PanelButtonExit;
   TBitBtn *BitBtn;
   TPageControl *PageControl;
   TTabSheet *TabSheetClassRoom;
   TTabSheet *TabSheetGraphic;
   TTabSheet *TabSheetDistribution;
   TDataSource *DataSourceAuditoria;
   TDBGrid *GridAudit;
   TPanel *PanelRaspMain;
   TADOTable *TableAuditoria;
   TDBGrid *GridGraphic;
   TADOTable *TableGraphic;
   TDataSource *DataSourceGraphic;
  TDBNavigator *NavigatorAuditoria;
  TDBNavigator *NavigatorGraphic;
  TPanel *PanelObuchFormaFacults;
  TPanel *PanelSpecialsSpecAuditoria;
  TPanel *PanelSpecials;
  TDBGrid *GridObuchForma;
  TDBGrid *GridFacults;
  TSplitter *Splitter1;
  TPanel *PanelSpecAuditoria;
  TDBGrid *GridSpecials;
  TDBGrid *GridSpecAuditoria;
  TDBNavigator *DBNavigatorSpecAuditoria;
  TADOQuery *ADOQueryObuchForma;
  TDataSource *DataSourceObuchForma;
  TDataSource *DataSourceFacults;
  TADOQuery *ADOQueryFacults;
  TADOQuery *ADOQuerySpecials;
  TDataSource *DataSourceSpecials;
  TIntegerField *TableAuditoriaKod;
  TWideStringField *TableAuditoriaNazvanie;
  TIntegerField *TableGraphicKod;
  TWideStringField *TableGraphicData;
  TWideStringField *TableGraphicStart_Time;
  TWideStringField *TableGraphicFinish_Time;
  TIntegerField *ADOQueryObuchFormaIdObuchForma;
  TWideStringField *ADOQueryObuchFormaName;
  TIntegerField *ADOQueryFacultsObuchForma;
  TIntegerField *ADOQueryFacultsIdFacult;
  TWideStringField *ADOQueryFacultsFacNameS;
  TIntegerField *ADOQuerySpecialsIdPlanPriema;
  TWideStringField *ADOQuerySpecialsDSDesigner;
  TADOTable *TableSpecAuditoria;
  TDataSource *DataSourceSpecAuditoria;
  TAutoIncField *TableSpecAuditoriaKod;
  TIntegerField *TableSpecAuditoriaIdPlanPriema;
  TIntegerField *TableSpecAuditoriaKod_Auditorii;
  TStringField *TableSpecAuditoriaAuditoria;
  TIntegerField *TableSpecAuditoriaWorkPlaces;
  TADOQuery *ADOQuerySpecAuditoria;
  TADOQuery *ADOQueryRegistration;
  TPanel *PanelCreateTableRegistration;
  TButton *ButtonCreateGraphic;
  TPanel *PanelButtonTableRegistration;
  TButton *ButtonTableRagistration;
  void __fastcall TableSpecAuditoriaAfterInsert(TDataSet *DataSet);
  void __fastcall ButtonCreateGraphicClick(TObject *Sender);
  void __fastcall ButtonTableRagistrationClick(TObject *Sender);
private:	// User declarations
public:		// User declarations
   __fastcall TFormMain(TComponent* Owner);
   __fastcall ~TFormMain();
};
//---------------------------------------------------------------------------
extern PACKAGE TFormMain *FormMain;
//---------------------------------------------------------------------------
#endif
