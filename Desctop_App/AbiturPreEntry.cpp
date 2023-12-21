//---------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop
//---------------------------------------------------------------------------
USEFORM("MainForm.cpp", FormMain);
USEFORM("RegistrationForm.cpp", FormRegistration);
USEFORM("ProgressForm.cpp", FormProgress);
//---------------------------------------------------------------------------
WINAPI WinMain(HINSTANCE, HINSTANCE, LPSTR, int)
{
   try
   {
       Application->Initialize();
       Application->CreateForm(__classid(TFormMain), &FormMain);
                 Application->CreateForm(__classid(TFormRegistration), &FormRegistration);
                 Application->CreateForm(__classid(TFormProgress), &FormProgress);
                 Application->Run();
   }
   catch (Exception &exception)
   {
       Application->ShowException(&exception);
   }
   catch (...)
   {
       try
       {
          throw Exception("");
       }
       catch (Exception &exception)
       {
          Application->ShowException(&exception);
       }
   }
   return 0;
}
//---------------------------------------------------------------------------