object FormMain: TFormMain
  Left = 405
  Top = 139
  Width = 1168
  Height = 739
  Caption = #1055#1088#1077#1076#1074#1072#1088#1080#1090#1077#1083#1100#1085#1072#1103' '#1079#1072#1087#1080#1089#1100' '#1072#1073#1080#1090#1091#1088#1080#1077#1085#1090#1086#1074
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  Visible = True
  PixelsPerInch = 96
  TextHeight = 13
  object PanelMain: TPanel
    Left = 0
    Top = 0
    Width = 1152
    Height = 662
    Align = alClient
    BevelOuter = bvNone
    TabOrder = 0
    object PageControl: TPageControl
      Left = 0
      Top = 0
      Width = 1152
      Height = 662
      ActivePage = TabSheetDistribution
      Align = alClient
      TabIndex = 2
      TabOrder = 0
      object TabSheetClassRoom: TTabSheet
        Caption = #1040#1091#1076#1080#1090#1086#1088#1080#1080
        object GridAudit: TDBGrid
          Left = 0
          Top = 0
          Width = 1144
          Height = 609
          Align = alClient
          Ctl3D = True
          DataSource = DataSourceAuditoria
          ParentCtl3D = False
          ReadOnly = True
          TabOrder = 0
          TitleFont.Charset = DEFAULT_CHARSET
          TitleFont.Color = clWindowText
          TitleFont.Height = -11
          TitleFont.Name = 'MS Sans Serif'
          TitleFont.Style = []
          Columns = <
            item
              Expanded = False
              FieldName = 'Kod'
              Visible = False
            end
            item
              Expanded = False
              FieldName = 'Nazvanie'
              Title.Alignment = taCenter
              Title.Caption = #1053#1072#1079#1074#1072#1085#1080#1077
              Visible = True
            end>
        end
        object NavigatorAuditoria: TDBNavigator
          Left = 0
          Top = 609
          Width = 1144
          Height = 25
          DataSource = DataSourceAuditoria
          Align = alBottom
          TabOrder = 1
        end
      end
      object TabSheetGraphic: TTabSheet
        Caption = #1043#1088#1072#1092#1080#1082' '#1088#1072#1073#1086#1090#1099
        ImageIndex = 1
        object GridGraphic: TDBGrid
          Left = 0
          Top = 0
          Width = 1229
          Height = 704
          Align = alClient
          DataSource = DataSourceGraphic
          ReadOnly = True
          TabOrder = 0
          TitleFont.Charset = DEFAULT_CHARSET
          TitleFont.Color = clWindowText
          TitleFont.Height = -11
          TitleFont.Name = 'MS Sans Serif'
          TitleFont.Style = []
          Columns = <
            item
              Expanded = False
              FieldName = 'Kod'
              Visible = False
            end
            item
              Alignment = taCenter
              Expanded = False
              FieldName = 'Data'
              Title.Alignment = taCenter
              Title.Caption = #1044#1072#1090#1072
              Width = 80
              Visible = True
            end
            item
              Alignment = taCenter
              Expanded = False
              FieldName = 'Start_Time'
              Title.Alignment = taCenter
              Title.Caption = #1042#1088#1077#1084#1103' '#1085#1072#1095#1072#1083#1072
              Width = 80
              Visible = True
            end
            item
              Alignment = taCenter
              Expanded = False
              FieldName = 'Finish_Time'
              Title.Alignment = taCenter
              Title.Caption = #1042#1088#1077#1084#1103' '#1082#1086#1085#1094#1072
              Width = 80
              Visible = True
            end>
        end
        object NavigatorGraphic: TDBNavigator
          Left = 0
          Top = 704
          Width = 1229
          Height = 25
          DataSource = DataSourceGraphic
          Align = alBottom
          TabOrder = 1
        end
      end
      object TabSheetDistribution: TTabSheet
        Caption = #1056#1072#1089#1087#1088#1077#1076#1077#1083#1077#1085#1080#1077' '#1087#1086' '#1072#1091#1076#1080#1090#1086#1088#1080#1103#1084
        ImageIndex = 2
        object PanelRaspMain: TPanel
          Left = 0
          Top = 0
          Width = 1144
          Height = 634
          Align = alClient
          TabOrder = 0
          object PanelObuchFormaFacults: TPanel
            Left = 1
            Top = 1
            Width = 248
            Height = 632
            Align = alLeft
            TabOrder = 0
            object GridObuchForma: TDBGrid
              Left = 1
              Top = 1
              Width = 246
              Height = 120
              Align = alTop
              DataSource = DataSourceObuchForma
              ReadOnly = True
              TabOrder = 0
              TitleFont.Charset = DEFAULT_CHARSET
              TitleFont.Color = clWindowText
              TitleFont.Height = -11
              TitleFont.Name = 'MS Sans Serif'
              TitleFont.Style = []
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
                  Width = 150
                  Visible = True
                end>
            end
            object GridFacults: TDBGrid
              Left = 1
              Top = 121
              Width = 246
              Height = 510
              Align = alClient
              DataSource = DataSourceFacults
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
                  Width = 150
                  Visible = True
                end>
            end
          end
          object PanelSpecialsSpecAuditoria: TPanel
            Left = 249
            Top = 1
            Width = 894
            Height = 632
            Align = alClient
            TabOrder = 1
            object Splitter1: TSplitter
              Left = 1
              Top = 225
              Width = 892
              Height = 3
              Cursor = crVSplit
              Align = alTop
            end
            object PanelSpecials: TPanel
              Left = 1
              Top = 1
              Width = 892
              Height = 224
              Align = alTop
              TabOrder = 0
              object GridSpecials: TDBGrid
                Left = 1
                Top = 1
                Width = 890
                Height = 222
                Align = alClient
                DataSource = DataSourceSpecials
                ReadOnly = True
                TabOrder = 0
                TitleFont.Charset = DEFAULT_CHARSET
                TitleFont.Color = clWindowText
                TitleFont.Height = -11
                TitleFont.Name = 'MS Sans Serif'
                TitleFont.Style = []
                Columns = <
                  item
                    Expanded = False
                    FieldName = 'IdPlanPriema'
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
            end
            object PanelSpecAuditoria: TPanel
              Left = 1
              Top = 228
              Width = 892
              Height = 403
              Align = alClient
              TabOrder = 1
              object GridSpecAuditoria: TDBGrid
                Left = 1
                Top = 1
                Width = 890
                Height = 376
                Align = alClient
                DataSource = DataSourceSpecAuditoria
                TabOrder = 0
                TitleFont.Charset = DEFAULT_CHARSET
                TitleFont.Color = clWindowText
                TitleFont.Height = -11
                TitleFont.Name = 'MS Sans Serif'
                TitleFont.Style = []
                Columns = <
                  item
                    Expanded = False
                    FieldName = 'Kod'
                    Visible = False
                  end
                  item
                    Expanded = False
                    FieldName = 'Auditoria'
                    Title.Alignment = taCenter
                    Title.Caption = #1040#1091#1076#1080#1090#1086#1088#1080#1103
                    Visible = True
                  end
                  item
                    Expanded = False
                    FieldName = 'IdPlanPriema'
                    Visible = False
                  end
                  item
                    Expanded = False
                    FieldName = 'Kod_Auditorii'
                    Visible = False
                  end
                  item
                    Expanded = False
                    FieldName = 'WorkPlaces'
                    Title.Alignment = taCenter
                    Title.Caption = #1050#1086#1083'-'#1074#1086' '#1088#1072#1073#1086#1095#1080#1093' '#1084#1077#1089#1090
                    Width = 120
                    Visible = True
                  end>
              end
              object DBNavigatorSpecAuditoria: TDBNavigator
                Left = 1
                Top = 377
                Width = 890
                Height = 25
                DataSource = DataSourceSpecAuditoria
                Align = alBottom
                TabOrder = 1
              end
            end
          end
        end
      end
    end
  end
  object PanelButtons: TPanel
    Left = 0
    Top = 662
    Width = 1152
    Height = 38
    Align = alBottom
    BevelOuter = bvNone
    TabOrder = 1
    object PanelButtonExit: TPanel
      Left = 967
      Top = 0
      Width = 185
      Height = 38
      Align = alRight
      BevelOuter = bvNone
      TabOrder = 0
      object BitBtn: TBitBtn
        Left = 80
        Top = 8
        Width = 91
        Height = 25
        Caption = #1042#1099#1093#1086#1076
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
    object PanelCreateTableRegistration: TPanel
      Left = 0
      Top = 0
      Width = 481
      Height = 38
      Align = alLeft
      BevelOuter = bvNone
      TabOrder = 1
      object ButtonCreateGraphic: TButton
        Left = 8
        Top = 8
        Width = 465
        Height = 25
        Caption = #1057#1086#1079#1076#1072#1090#1100' '#1075#1088#1072#1092#1080#1082' '#1087#1088#1077#1076#1074#1072#1088#1080#1090#1077#1083#1100#1085#1086#1081' '#1079#1072#1087#1080#1089#1080' '#1087#1088#1080#1105#1084#1072' '#1076#1086#1082#1091#1084#1077#1085#1090#1086#1074
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = [fsBold]
        ParentFont = False
        TabOrder = 0
        OnClick = ButtonCreateGraphicClick
      end
    end
    object PanelButtonTableRegistration: TPanel
      Left = 481
      Top = 0
      Width = 144
      Height = 38
      Align = alLeft
      BevelOuter = bvNone
      TabOrder = 2
      object ButtonTableRagistration: TButton
        Left = 8
        Top = 8
        Width = 129
        Height = 25
        Caption = #1056#1077#1075#1080#1089#1090#1088#1072#1094#1080#1103
        Font.Charset = RUSSIAN_CHARSET
        Font.Color = clWindowText
        Font.Height = -16
        Font.Name = 'Times New Roman'
        Font.Style = [fsBold]
        ParentFont = False
        TabOrder = 0
        OnClick = ButtonTableRagistrationClick
      end
    end
  end
  object ADOConnection: TADOConnection
    ConnectOptions = coAsyncConnect
    LoginPrompt = False
    Provider = 'SQLOLEDB.1'
    Top = 640
  end
  object DataSourceAuditoria: TDataSource
    DataSet = TableAuditoria
    Top = 616
  end
  object TableAuditoria: TADOTable
    Connection = ADOConnection
    CursorType = ctStatic
    TableName = 'Auditoria'
    Top = 592
    object TableAuditoriaKod: TIntegerField
      FieldName = 'Kod'
    end
    object TableAuditoriaNazvanie: TWideStringField
      FieldName = 'Nazvanie'
      Size = 60
    end
  end
  object TableGraphic: TADOTable
    Connection = ADOConnection
    CursorType = ctStatic
    TableName = 'Graphic'
    Left = 24
    Top = 592
    object TableGraphicKod: TIntegerField
      FieldName = 'Kod'
    end
    object TableGraphicData: TWideStringField
      FieldName = 'Data'
      Size = 10
    end
    object TableGraphicStart_Time: TWideStringField
      FieldName = 'Start_Time'
      Size = 8
    end
    object TableGraphicFinish_Time: TWideStringField
      FieldName = 'Finish_Time'
      Size = 8
    end
  end
  object DataSourceGraphic: TDataSource
    DataSet = TableGraphic
    Left = 24
    Top = 616
  end
  object ADOQueryObuchForma: TADOQuery
    Connection = ADOConnection
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'select Id IdObuchForma, Name from ObuchForma')
    Left = 88
    Top = 592
    object ADOQueryObuchFormaIdObuchForma: TIntegerField
      FieldName = 'IdObuchForma'
    end
    object ADOQueryObuchFormaName: TWideStringField
      FieldName = 'Name'
      Size = 11
    end
  end
  object DataSourceObuchForma: TDataSource
    DataSet = ADOQueryObuchForma
    Left = 88
    Top = 616
  end
  object DataSourceFacults: TDataSource
    DataSet = ADOQueryFacults
    Left = 112
    Top = 616
  end
  object ADOQueryFacults: TADOQuery
    Connection = ADOConnection
    CursorType = ctStatic
    DataSource = DataSourceObuchForma
    Parameters = <
      item
        Name = 'IdObuchForma'
        Attributes = [paSigned, paNullable]
        DataType = ftInteger
        Precision = 10
        Value = 1
      end>
    SQL.Strings = (
      
        'SELECT distinct ObuchForma, F.IdFacult, FacNameS FROM FACULTS F,' +
        ' '#1055#1083#1072#1085#1055#1088#1080#1077#1084#1072' P'
      'WHERE F.IdFacult = P.IdFacult and ObuchForma = :IdObuchForma')
    Left = 112
    Top = 592
    object ADOQueryFacultsObuchForma: TIntegerField
      FieldName = 'ObuchForma'
    end
    object ADOQueryFacultsIdFacult: TIntegerField
      FieldName = 'IdFacult'
    end
    object ADOQueryFacultsFacNameS: TWideStringField
      FieldName = 'FacNameS'
      Size = 15
    end
  end
  object ADOQuerySpecials: TADOQuery
    Connection = ADOConnection
    CursorType = ctStatic
    DataSource = DataSourceFacults
    Parameters = <
      item
        Name = 'ObuchForma'
        Attributes = [paSigned, paNullable]
        DataType = ftInteger
        Precision = 10
        Value = 1
      end
      item
        Name = 'IdFacult'
        Attributes = [paSigned, paNullable]
        DataType = ftInteger
        Precision = 10
        Value = 4
      end>
    SQL.Strings = (
      'select min(Id) IdPlanPriema, '#1044#1083#1103#1040#1085#1082#1077#1090#1099
      'from '#1055#1083#1072#1085#1055#1088#1080#1077#1084#1072' P, Specials S'
      'where P.IdSpecial = S.IdSpecial'
      'and P.ObuchForma = :ObuchForma and P.IdFacult = :IdFacult'
      'group by '#1044#1083#1103#1040#1085#1082#1077#1090#1099)
    Left = 136
    Top = 592
    object ADOQuerySpecialsIdPlanPriema: TIntegerField
      FieldName = 'IdPlanPriema'
      ReadOnly = True
    end
    object ADOQuerySpecialsDSDesigner: TWideStringField
      FieldName = #1044#1083#1103#1040#1085#1082#1077#1090#1099
      Size = 21
    end
  end
  object DataSourceSpecials: TDataSource
    DataSet = ADOQuerySpecials
    Left = 136
    Top = 616
  end
  object TableSpecAuditoria: TADOTable
    Connection = ADOConnection
    CursorType = ctStatic
    AfterInsert = TableSpecAuditoriaAfterInsert
    IndexFieldNames = 'IdPlanPriema'
    MasterFields = 'IdPlanPriema'
    MasterSource = DataSourceSpecials
    TableName = 'SpecAuditoria'
    Left = 48
    Top = 592
    object TableSpecAuditoriaKod: TAutoIncField
      FieldName = 'Kod'
      ReadOnly = True
    end
    object TableSpecAuditoriaAuditoria: TStringField
      FieldKind = fkLookup
      FieldName = 'Auditoria'
      LookupDataSet = TableAuditoria
      LookupKeyFields = 'Kod'
      LookupResultField = 'Nazvanie'
      KeyFields = 'Kod_Auditorii'
      Lookup = True
    end
    object TableSpecAuditoriaIdPlanPriema: TIntegerField
      FieldName = 'IdPlanPriema'
    end
    object TableSpecAuditoriaKod_Auditorii: TIntegerField
      FieldName = 'Kod_Auditorii'
    end
    object TableSpecAuditoriaWorkPlaces: TIntegerField
      FieldName = 'WorkPlaces'
    end
  end
  object DataSourceSpecAuditoria: TDataSource
    DataSet = TableSpecAuditoria
    Left = 48
    Top = 616
  end
  object ADOQuerySpecAuditoria: TADOQuery
    Connection = ADOConnection
    CursorType = ctStatic
    Parameters = <>
    SQL.Strings = (
      'Select *'
      'From SpecAuditoria')
    Left = 24
    Top = 672
  end
  object ADOQueryRegistration: TADOQuery
    Connection = ADOConnection
    CursorType = ctStatic
    Parameters = <>
    Top = 672
  end
end
