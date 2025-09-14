define("UsrReality_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrReality"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "cc192387-b5e6-47c1-af48-a53653a67b3c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_ew17tlh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_ew17tlh_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_hhtahr6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_hhtahr6_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateRealityAveragePriceProcessUsrReality1",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealityTypeIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_ew17tlh",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_3i08hc9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_3i08hc9_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "checkmark-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_fdgs46x",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_g0o3vim",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_g0o3vim"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_2q72zxe",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn3_bsvjerc",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn3_bsvjerc"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_biidjmw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_22ci6sb",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_22ci6sb",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Reality.Type",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrRealityType_jne9olr",
					"labelPosition": "auto",
					"control": "$PDS_UsrRealityType_jne9olr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_w3ngkl3",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_ems4de3",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_ems4de3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_sywn88a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_0au798e",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_0au798e",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_7rdr4by",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_qf99150",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_qf99150",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ComboBox_nb68pw2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_d3rm6o4",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_d3rm6o4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_fad386s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_7plmeuh",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_7plmeuh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_b8kzhth",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_a8oem3y",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_a8oem3y",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NumberInput_klqwemj",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_p3nl0lp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_p3nl0lp_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_0mluwth",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_p3nl0lp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_tghs4dg",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_0mluwth",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_qldt09u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_qldt09u_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealityVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentReality",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_tghs4dg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_w5mxy7n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_w5mxy7n_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_dfhm5shDS"
						}
					}
				},
				"parentName": "FlexContainer_tghs4dg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_22yg3tc",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_22yg3tc_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_tghs4dg",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_717u1la",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_717u1la_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_dfhm5sh"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_22yg3tc",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_q45mdxo",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_q45mdxo_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealityVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_22yg3tc",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_92wlxtm",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_92wlxtm_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_92wlxtm_GridDetail_dfhm5sh",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_dfhm5sh"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_92wlxtm_SearchValue",
							"GridDetailSearchFilter_92wlxtm_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_tghs4dg",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_cp90qjo",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_p3nl0lp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_dfhm5sh",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_dfhm5sh",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_dfhm5shDS_Id",
					"columns": [
						{
							"id": "2d1bdffa-2f17-a2b0-cdf7-6a8413b74b44",
							"code": "GridDetail_dfhm5shDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_dfhm5shDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "56ca1526-cecf-5ffc-a9fb-224d48a79091",
							"code": "GridDetail_dfhm5shDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_dfhm5shDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "25370aba-b1c1-546e-706f-358845e2ca28",
							"code": "GridDetail_dfhm5shDS_UsrComments",
							"caption": "#ResourceString(GridDetail_dfhm5shDS_UsrComments)#",
							"dataValueType": 28
						},
						{
							"id": "88cc5af3-2e0f-f8bf-d94a-cc4ac568ee13",
							"code": "GridDetail_dfhm5shDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_dfhm5shDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "b1a1033e-ce65-d22c-4921-19b91bb108a8",
							"code": "GridDetail_dfhm5shDS_UsrParentReality",
							"caption": "#ResourceString(GridDetail_dfhm5shDS_UsrParentReality)#",
							"dataValueType": 10
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_cp90qjo",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_g0o3vim": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn3_bsvjerc": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrRealityType_jne9olr": {
						"modelConfig": {
							"path": "PDS.UsrRealityType"
						}
					},
					"PDS_UsrOfferType_ems4de3": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_0au798e": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_qf99150": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_uobxyv9": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrNumber_a8oem3y": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_d3rm6o4": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_7plmeuh": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommission_22ci6sb": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrColumn12_jqni0we": {
						"modelConfig": {
							"path": "PDS.UsrColumn12"
						}
					},
					"PDS_UsrColumn12_lllaq2x": {
						"modelConfig": {
							"path": "PDS.UsrColumn12"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_dfhm5sh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_dfhm5shDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_92wlxtm_GridDetail_dfhm5sh",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComments"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_dfhm5shDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_dfhm5shDS.UsrVisitDateTime"
									}
								},
								"GridDetail_dfhm5shDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_dfhm5shDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_dfhm5shDS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_dfhm5shDS.UsrComments"
									}
								},
								"GridDetail_dfhm5shDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_dfhm5shDS.CreatedOn"
									}
								},
								"GridDetail_dfhm5shDS_UsrParentReality": {
									"modelConfig": {
										"path": "GridDetail_dfhm5shDS.UsrParentReality"
									}
								},
								"GridDetail_dfhm5shDS_Id": {
									"modelConfig": {
										"path": "GridDetail_dfhm5shDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_dfhm5shDS": [
							{
								"attributePath": "UsrParentReality",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrReality",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_dfhm5shDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealityVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentReality": {
									"path": "UsrParentReality"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_g0o3vim;
					console.log("Price = " + price);
					request.$context.PDS_UsrArea_glmjgg6 = price * 0.2;
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
        {
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      					if (request.attributeName === 'PDS_UsrPrice_g0o3vim' || 				             // if price changed
					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrPrice_g0o3vim;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommission_22ci6sb = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          "usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
        }/**SCHEMA_VALIDATORS*/
	};
});