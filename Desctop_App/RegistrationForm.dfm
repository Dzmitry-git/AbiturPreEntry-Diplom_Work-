object FormRegistration: TFormRegistration
  Left = 346
  Top = 116
  Width = 1415
  Height = 787
  Caption = #1056#1077#1075#1080#1089#1090#1088#1072#1094#1080#1103
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object PanelRegistrationTable: TPanel
    Left = 0
    Top = 0
    Width = 1399
    Height = 748
    Align = alClient
    TabOrder = 0
    object Splitter: TSplitter
      Left = 505
      Top = 1
      Width = 3
      Height = 704
      Cursor = crHSplit
    end
    object PanelButtonsRegistration: TPanel
      Left = 1
      Top = 1
      Width = 504
      Height = 704
      Align = alLeft
      BevelOuter = bvNone
      TabOrder = 0
      object CheckBoxFacults: TCheckBox
        Left = 8
        Top = 88
        Width = 169
        Height = 17
        Caption = #1042#1099#1073#1088#1072#1090#1100' '#1092#1072#1082#1091#1083#1100#1090#1077#1090
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = [fsBold]
        ParentFont = False
        TabOrder = 0
        OnClick = CheckBoxFacultsClick
      end
      object GridFacultsRegistration: TDBGrid
        Left = 1
        Top = 176
        Width = 136
        Height = 225
        Align = alCustom
        DataSource = FormMain.DataSourceFacults
        ReadOnly = True
        TabOrder = 1
        TitleFont.Charset = DEFAULT_CHARSET
        TitleFont.Color = clWindowText
        TitleFont.Height = -11
        TitleFont.Name = 'MS Sans Serif'
        TitleFont.Style = []
        Visible = False
        Columns = <
          item
            Expanded = False
            FieldName = 'ObuchForma'
            Visible = False
          end
          item
            Expanded = False
            FieldName = 'IdFacult'
            Visible = False
          end
          item
            Expanded = False
            FieldName = 'FacNameS'
            Title.Alignment = taCenter
            Title.Caption = #1053#1072#1079#1074#1072#1085#1080#1077' '#1092#1072#1082#1091#1083#1100#1090#1077#1090#1072
            Width = 135
            Visible = True
          end>
      end
      object GridObuchFormaRegistration: TDBGrid
        Left = 1
        Top = 112
        Width = 136
        Height = 65
        Align = alCustom
        DataSource = FormMain.DataSourceObuchForma
        ReadOnly = True
        TabOrder = 2
        TitleFont.Charset = DEFAULT_CHARSET
        TitleFont.Color = clWindowText
        TitleFont.Height = -11
        TitleFont.Name = 'MS Sans Serif'
        TitleFont.Style = []
        Visible = False
        Columns = <
          item
            Expanded = False
            FieldName = 'IdObuchForma'
            Visible = False
          end
          item
            Expanded = False
            FieldName = 'Name'
            Title.Alignment = taCenter
            Title.Caption = #1053#1072#1079#1074#1072#1085#1080#1077
            Visible = True
          end>
      end
      object DateTimePickerEnd: TDateTimePicker
        Left = 8
        Top = 56
        Width = 121
        Height = 24
        CalAlignment = dtaLeft
        Date = 44248.7416545833
        Time = 44248.7416545833
        DateFormat = dfShort
        DateMode = dmComboBox
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'MS Sans Serif'
        Font.Style = [fsBold]
        Kind = dtkDate
        ParseInput = False
        ParentFont = False
        TabOrder = 3
        Visible = False
      end
      object DateTimePickerStart: TDateTimePicker
        Left = 8
        Top = 32
        Width = 121
        Height = 24
        CalAlignment = dtaLeft
        Date = 44248.7415883912
        Time = 44248.7415883912
        DateFormat = dfShort
        DateMode = dmComboBox
        Font.Charset = DEFAULT_CHARSET
        Font.Color = clWindowText
        Font.Height = -13
        Font.Name = 'MS Sans Serif'
        Font.Style = [fsBold]
        Kind = dtkDate
        ParseInput = False
        ParentFont = False
        TabOrder = 4
        Visible = False
      end
      object CheckBoxTime: TCheckBox
        Left = 8
        Top = 8
        Width = 113
        Height = 17
        Caption = #1059#1082#1072#1079#1072#1090#1100' '#1076#1072#1090#1091
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = [fsBold]
        ParentFont = False
        TabOrder = 5
        OnClick = CheckBoxTimeClick
      end
      object CheckBoxSpecials: TCheckBox
        Left = 128
        Top = 8
        Width = 201
        Height = 17
        Caption = #1042#1099#1073#1088#1072#1090#1100' '#1089#1087#1077#1094#1080#1072#1083#1100#1085#1086#1089#1090#1100
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = [fsBold]
        ParentFont = False
        TabOrder = 6
        OnClick = CheckBoxSpecialsClick
      end
      object GridSpecialsRegistration: TDBGrid
        Left = 176
        Top = 32
        Width = 145
        Height = 337
        DataSource = FormMain.DataSourceSpecials
        ReadOnly = True
        TabOrder = 7
        TitleFont.Charset = DEFAULT_CHARSET
        TitleFont.Color = clWindowText
        TitleFont.Height = -11
        TitleFont.Name = 'MS Sans Serif'
        TitleFont.Style = []
        Visible = False
        Columns = <
          item
            Expanded = False
            FieldName = 'IdPlanPriema'
            Title.Alignment = taCenter
            Visible = False
          end
          item
            Expanded = False
            FieldName = #1044#1083#1103#1040#1085#1082#1077#1090#1099
            Title.Alignment = taCenter
            Title.Caption = #1057#1087#1077#1094#1080#1072#1083#1100#1085#1086#1089#1090#1100
            Visible = True
          end>
      end
      object ButtonSortFieldsRegistration: TButton
        Left = 48
        Top = 408
        Width = 233
        Height = 25
        Caption = #1055#1088#1086#1089#1084#1086#1090#1088#1077#1090#1100' '#1086#1090#1086#1073#1088#1072#1085#1085#1099#1077' '#1079#1072#1087#1080#1089#1080
        Enabled = False
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = []
        ParentFont = False
        TabOrder = 8
        OnClick = ButtonSortFieldsRegistrationClick
      end
      object ButtonShowAllFieldsRegistration: TButton
        Left = 48
        Top = 440
        Width = 233
        Height = 25
        Caption = #1055#1088#1086#1089#1084#1086#1090#1088#1077#1090#1100' '#1074#1089#1077' '#1079#1072#1087#1080#1089#1080
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = []
        ParentFont = False
        TabOrder = 9
        OnClick = ButtonShowAllFieldsRegistrationClick
      end
    end
    object GridRegistration: TDBGrid
      Left = 508
      Top = 1
      Width = 890
      Height = 704
      Align = alClient
      DataSource = DataSourceTableRagistration
      ReadOnly = True
      TabOrder = 1
      TitleFont.Charset = DEFAULT_CHARSET
      TitleFont.Color = clWindowText
      TitleFont.Height = -11
      TitleFont.Name = 'MS Sans Serif'
      TitleFont.Style = []
      Columns = <
        item
          Expanded = False
          FieldName = #1053#1086#1084#1077#1088#1055#1072#1089#1087#1086#1088#1090#1072
          Title.Alignment = taCenter
          Title.Caption = #1053#1086#1084#1077#1088' '#1087#1072#1089#1087#1086#1088#1090#1072
          Visible = True
        end
        item
          Expanded = False
          FieldName = #1058#1077#1083#1077#1092#1086#1085
          Title.Alignment = taCenter
          Width = 75
          Visible = True
        end
        item
          Alignment = taCenter
          Expanded = False
          FieldName = #1044#1072#1090#1072
          Title.Alignment = taCenter
          Width = 80
          Visible = True
        end
        item
          Alignment = taCenter
          Expanded = False
          FieldName = #1042#1088#1077#1084#1103
          Title.Alignment = taCenter
          Width = 80
          Visible = True
        end
        item
          Expanded = False
          FieldName = 'Nazvanie'
          Title.Alignment = taCenter
          Title.Caption = #1040#1091#1076#1080#1090#1086#1088#1080#1103
          Width = 67
          Visible = True
        end
        item
          Expanded = False
          FieldName = #1044#1083#1103#1040#1085#1082#1077#1090#1099
          Title.Alignment = taCenter
          Title.Caption = #1057#1087#1077#1094#1080#1072#1083#1100#1085#1086#1089#1090#1100
          Visible = True
        end
        item
          Expanded = False
          FieldName = #1053#1086#1084#1077#1088#1056#1072#1073#1086#1095#1077#1075#1086#1052#1077#1089#1090#1072
          Title.Alignment = taCenter
          Title.Caption = #1053#1086#1084#1077#1088' '#1089#1077#1082#1088#1077#1090#1072#1088#1103
          Visible = True
        end>
    end
    object PanelBottomBauttonsRegistration: TPanel
      Left = 1
      Top = 705
      Width = 1397
      Height = 42
      Align = alBottom
      BevelOuter = bvNone
      TabOrder = 2
      object PanelCloseRegistration: TPanel
        Left = 1212
        Top = 0
        Width = 185
        Height = 42
        Align = alRight
        BevelOuter = bvNone
        TabOrder = 0
        object BitBtnCloseRegistration: TBitBtn
          Left = 72
          Top = 8
          Width = 97
          Height = 25
          Caption = #1047#1072#1082#1088#1099#1090#1100
          Font.Charset = RUSSIAN_CHARSET
          Font.Color = clWindowText
          Font.Height = -16
          Font.Name = 'Times New Roman'
          Font.Style = [fsBold]
          ParentFont = False
          TabOrder = 0
          Kind = bkClose
        end
      end
    end
  end
  object ADOQueryRegistration: TADOQuery
    Connection = FormMain.ADOConnection
    CursorType = ctStatic
    Parameters = <>
    Top = 672
  end
  object ADOQueryTableRagisration: TADOQuery
    Connection = FormMain.ADOConnection
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      
        'Select '#1053#1086#1084#1077#1088#1055#1072#1089#1087#1086#1088#1090#1072', '#1058#1077#1083#1077#1092#1086#1085', '#1044#1072#1090#1072', '#1042#1088#1077#1084#1103', Auditoria.Nazvanie, ' +
        'SPECIALS.'#1044#1083#1103#1040#1085#1082#1077#1090#1099',  '#1053#1086#1084#1077#1088#1056#1072#1073#1086#1095#1077#1075#1086#1052#1077#1089#1090#1072
      'From '#1056#1077#1075#1080#1089#1090#1088#1072#1094#1080#1103', Auditoria, '#1055#1083#1072#1085#1055#1088#1080#1077#1084#1072', SPECIALS'
      
        'Where '#1056#1077#1075#1080#1089#1090#1088#1072#1094#1080#1103'.'#1040#1091#1076#1080#1090#1086#1088#1080#1103' = Auditoria.Kod and '#1056#1077#1075#1080#1089#1090#1088#1072#1094#1080#1103'.IdPl' +
        'anPriema = '#1055#1083#1072#1085#1055#1088#1080#1077#1084#1072'.Id and '#1055#1083#1072#1085#1055#1088#1080#1077#1084#1072'.IdSpecial = SPECIALS.IdS' +
        'pecial')
    Left = 32
    Top = 648
  end
  object DataSourceTableRagistration: TDataSource
    DataSet = ADOQueryTableRagisration
    Left = 32
    Top = 672
  end
  object TimeForm: TTimer
    Interval = 1
    OnTimer = TimeFormTimer
    Left = 32
    Top = 704
  end
end
