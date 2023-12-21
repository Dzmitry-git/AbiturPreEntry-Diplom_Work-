//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

#include "MainForm.h"
#include "ProgressForm.h"
//---------------------------------------------------------------------------
#pragma package(smart_init)
#pragma resource "*.dfm"
TFormProgress *FormProgress;
//---------------------------------------------------------------------------
__fastcall TFormProgress::TFormProgress(TComponent* Owner)
        : TForm(Owner)
{
}
//---------------------------------------------------------------------------
