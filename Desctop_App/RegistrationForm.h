//---------------------------------------------------------------------------

#ifndef RegistrationFormH
#define RegistrationFormH
//---------------------------------------------------------------------------
#include <Classes.hpp>
#include <Controls.hpp>
#include <StdCtrls.hpp>
#include <Forms.hpp>
#include <ComCtrls.hpp>
#include <DBGrids.hpp>
#include <ExtCtrls.hpp>
#include <Grids.hpp>
#include <Buttons.hpp>
#include <ADODB.hpp>
#include <DB.hpp>
//---------------------------------------------------------------------------
class TFormRegistration : public TForm
{
__published:	// IDE-managed Components
  TPanel *PanelRegistrationTable;
  TPanel *PanelButtonsRegistration;
  TCheckBox *CheckBoxFacults;
  TDBGrid *GridFacultsRegistration;
  TDBGrid *GridObuchFormaRegistration;
  TDateTimePicker *DateTimePickerEnd;
  TDateTimePicker *DateTimePickerStart;
  TCheckBox *CheckBoxTime;
  TCheckBox *CheckBoxSpecials;
  TDBGrid *GridSpecialsRegistration;
  TButton *ButtonSortFieldsRegistration;
  TDBGrid *GridRegistration;
  TPanel *PanelBottomBauttonsRegistration;
  TPanel *PanelCloseRegistration;
  TBitBtn *BitBtnCloseRegistration;
  TADOQuery *ADOQueryRegistration;
  TADOQuery *ADOQueryTableRagisration;
  TDataSource *DataSourceTableRagistration;
  TButton *ButtonShowAllFieldsRegistration;
  TTimer *TimeForm;
    TSplitter *Splitter;
  void __fastcall ButtonSortFieldsRegistrationClick(TObject *Sender);
        void __fastcall ButtonShowAllFieldsRegistrationClick(TObject *Sender);
  void __fastcall CheckBoxTimeClick(TObject *Sender);
  void __fastcall CheckBoxFacultsClick(TObject *Sender);
  void __fastcall CheckBoxSpecialsClick(TObject *Sender);
  void __fastcall TimeFormTimer(TObject *Sender);
private:	// User declarations
public:		// User declarations
  __fastcall TFormRegistration(TComponent* Owner);
  __fastcall ~TFormRegistration();
};
//---------------------------------------------------------------------------
extern PACKAGE TFormRegistration *FormRegistration;
//---------------------------------------------------------------------------
#endif
