define({"lug":{"stageplugininterface":[325],"getstageplugins":[325],"getcategoryimportstagepluginsstack":[325],"middlewareloggerconfigplugininterface":[325],"getakeneopimloggerconfigplugin":[325],"preprocessorhookplugininterface":[325],"getpreprocessorhookplugins":[325],"getcategoryimportpreprocessorpluginsstack":[325],"postprocessorhookplugininterface":[325],"getpostprocessorhookplugins":[325],"getcategoryimportpostprocessorpluginsstack":[325],"getconfigurationprofilepluginsstack":[325,460],"pimconfigurationprofileplugin":[325],"defaultconfigurationprofileplugin":[325,460],"reportpostprocessorhookplugin":[325],"orderreadstreamplugin":[325],"orderexportprocessconfigurationplugin":[325],"abstractgenericvalidatorplugin":[325],"abstractgenerictranslatorfunctionplugin":[325],"categorydataimporterplugin":[325,460],"addcategorydataimporterplugin":[325,460],"my_module_category_importer_plugin":[325],"dataimporterplugininterface":[325],"$dataimporterplugin":[325],"dataimporterplugin":[325],"categoryimporterplugin":[325],"addcategoryimportprocessplugins":[325],"category_import_output_stream_plugin":[325],"categorywritestreamplugin":[325],"slugan":[327],"pluginomsconditionpaymentiscompleted":[337],"pluginomscommandsendpaymentrequest":[337],"isrefundapprovedplugin":[338,404,405,430,433],"createinvoiceplugin":[338],"sendinvoiceplugin":[338],"updatepaymentstatusplugin":[338],"updateorderplugin":[338],"refundpaymentplugin":[338,456],"cancelorderplugin":[338],"youreventlistenerplugin":[342],"consolelogplugin":[342],"my_plugins":[346],"aplugin":[346],"bplugin":[346],"itemtaxcalculatorplugin":[351,540,594],"anotherbundleplugininterface":[351],"synchronizationstoragequeuemessageprocessorplugin":[352,565],"synchronizationsearchqueuemessageprocessorplugin":[352],"getprocessormessageplugins":[352,484,564,565],"extracttextplugin":[366],"provideplugin":[366],"uglifyjsplugin":[366],"cancelordercommandplugin":[388,391,401],"closeordercommandplugin":[388,391],"refundordercommandplugin":[388,391],"reauthorizeexpiredordercommandplugin":[388,391],"capturecommandplugin":[388,391,435,438],"updatesuspendedordercommandplugin":[388,391],"updateneworderstatuscommandplugin":[388],"updateauthorizationstatuscommandplugin":[388,391],"updatecapturestatuscommandplugin":[388,391],"updaterefundstatuscommandplugin":[388,391],"condition_plugins":[388,391,404,420,430,435,563],"isclosedconditionplugin":[388,391],"iscloseallowedconditionplugin":[388,391],"iscancelledconditionplugin":[388,391,401],"iscancelnotallowedconditionplugin":[388,391],"iscancelledorderconditionplugin":[388,391],"isauthopenconditionplugin":[388,391],"isauthdeclinedconditionplugin":[388,391],"isauthpendingconditionplugin":[388,391],"isauthsuspendedconditionplugin":[388,391],"isauthexpiredconditionplugin":[388,391],"isauthclosedconditionplugin":[388,391],"isauthtransactiontimedoutconditionplugin":[388,391],"iscapturecompletedconditionplugin":[388,391],"iscapturedeclinedconditionplugin":[388,391],"iscapturependingconditionplugin":[388,391],"isrefundcompletedconditionplugin":[388,391],"isrefunddeclinedconditionplugin":[388,391],"isrefundpendingconditionplugin":[388,391],"storeorderplugin":[399],"isstoreordersuccessfulplugin":[399],"billpaycustomerhandlerplugin":[401],"stephandlerplugincollection":[401,404,407,415,420,430,435,436],"provideplugins":[401,420,620,701],"plugin_customer_step_handler":[401],"$plugins":[401],"createshipmentplugins":[401,668],"subformplugincollection":[401,404,407,415,420,430,435],"billpayinvoicesubformplugin":[401],"billpaypaymenthandlerplugin":[401],"plugin_shipment_handler":[401],"plugin_shipment_form_data_provider":[401],"$shipmentplugins":[401,436],"shipmentplugins":[401,436],"plugin_shipment_step_handler":[401,436],"billpaysaveorderplugin":[401],"isinvoicepaidconditionplugin":[401],"ispreauthorizedconditionplugin":[401],"isitemcancelledconditionplugin":[401],"preauthorizecommandplugin":[401,435,438],"invoicecreatedcommandplugin":[401],"cancelitemcommandplugin":[401],"$paymenthandlerplugins":[404,430],"braintreehandlerplugin":[404],"$paymentsubformplugins":[404,430],"braintreecreditcardsubformplugin":[404],"braintreepaypalsubformplugin":[404],"authorizeplugin":[404,405,420],"revertplugin":[404,405,430,433],"captureplugin":[404,405,420,421,422,426,430,433],"refundplugin":[404,405,430,433],"isauthorizationapprovedplugin":[404,405],"isreversalapprovedplugin":[404,405,430,433],"iscaptureapprovedplugin":[404,420,430],"checkout_plugins":[404,407,420,430,435],"checkoutplugincollection":[404,407,420,430,435],"$plugincollection":[404,407,420,430,435],"braintreeprecheckplugin":[404],"checkout_pre_check_plugins":[404,430,435,550,645],"braintreesaveorderplugin":[404],"checkout_order_saver_plugins":[404,407,420,430,435,550,645],"braintreepostsaveplugin":[404],"checkout_post_save_plugins":[404,407,420,430,435],"computoppaymenthandlerplugin":[407,415],"$paymentsubformplugin":[407,415,420,435],"creditcardsubformplugin":[407],"paypalsubformplugin":[407],"directdebitsubformplugin":[407],"sofortsubformplugin":[407],"paydirektsubformplugin":[407],"idealsubformplugin":[407],"easycreditsubformplugin":[407],"paynowsubformplugin":[407,415],"computopsaveorderplugin":[407],"computoppostcheckplugin":[407],"$pimpleplugin":[420],"heidelpaysofortsubformplugin":[420],"heidelpaypaypalauthorizesubformplugin":[420],"heidelpaypaypaldebitsubformplugin":[420],"heidelpayidealsubformplugin":[420],"heidelpayeasycreditsubformplugin":[420],"heidelpaycreditcardsecuresubformplugin":[420],"heidelpayhandlerplugin":[420],"isauthorizationcompletedplugin":[420],"isdebitcompletedplugin":[420],"debitplugin":[420],"heidelpaysaveorderplugin":[420],"heidelpaypostsaveplugin":[420,421,422,423,425],"baseabstractplugin":[421,422,423,425],"checkoutpostcheckplugininterface":[421,422,423,425],"finalizeplugin":[427],"payolutionhandlerplugin":[430],"payolutioninstallmentsubformplugin":[430],"payolutioninvoicesubformplugin":[430],"preauthorizeplugin":[430,433],"reauthorizeplugin":[430,433],"ispreauthorizationapprovedplugin":[430,433],"isreauthorizationapprovedplugin":[430,433],"payolutionprecheckplugin":[430],"payolutionsaveorderplugin":[430],"payolutionpostcheckplugin":[430],"plug":[435],"payonehandlerplugin":[435],"payoneinvoicesubformplugin":[435],"payonesecurityinvoicesubformplugin":[435],"payonecreditcardsubformplugin":[435],"payonedirectdebitsubformplugin":[435],"payoneewalletsubformplugin":[435],"payoneepsonlinetransfersubformplugin":[435],"payoneprepaymentsubformplugin":[435],"payoneprecheckplugin":[435],"payonesaveorderplugin":[435],"payonepostsavehookplugin":[435],"preauthorizationisapprovedconditionplugin":[435,438],"authorizationisapprovedconditionplugin":[435,438],"captureisapprovedconditionplugin":[435,438],"refundisapprovedconditionplugin":[435],"refundispossibleconditionplugin":[435],"preauthorizationiserrorconditionplugin":[435,438],"authorizationiserrorconditionplugin":[435,438],"preauthorizationisredirectconditionplugin":[435,438],"authorizationisredirectconditionplugin":[435,438],"paymentisappointedconditionplugin":[435],"paymentiscaptureconditionplugin":[435],"paymentispaidconditionplugin":[435],"paymentisunderpaidconditionplugin":[435],"paymentisoverpaidconditionplugin":[435],"paymentisrefundconditionplugin":[435],"authorizecommandplugin":[435,438],"cancelcommandplugin":[435],"capturewithsettlementcommandplugin":[435],"refundcommandplugin":[435],"getshipmentformdataproviderplugin":[436],"preauthorizationisapprovedplugin":[437],"preauthorizationiserrorplugin":[437],"preauthorizationisredirectplugin":[437],"captureisapprovedplugin":[437],"authorizationisapprovedplugin":[437],"authorizationiserrorplugin":[437],"authorizationisredirectplugin":[437],"refundisapprovedplugin":[437],"refundispossibleplugin":[437],"preauthorizawithsettlementcommandplugin":[438],"captureiserrorconditionplugin":[438],"confirmdeliveryplugin":[456],"confirmpaymentplugin":[456],"cancelpaymentplugin":[456],"isrefundedplugin":[456],"ispaymentconfirmedplugin":[456],"isdeliveryconfirmedplugin":[456],"iscancellationconfirmedplugin":[456],"akeneo_pim_middleware_category_importer_plugin":[460],"addattributedataimporterplugin":[460],"akeneo_pim_middleware_attribute_importer_plugin":[460],"attributedataimporterplugin":[460],"addproductabstractdataimporterplugin":[460],"akeneo_pim_middleware_product_abstract_importer_plugin":[460],"productabstractdataimporterplugin":[460],"addproductconcretedataimporterplugin":[460],"akeneo_pim_middleware_product_concrete_importer_plugin":[460],"productconcretedataimporterplugin":[460],"getcheckoutbreadcrumbplugin":[469,545],"getproductpromotionmapperplugin":[469,701],"inxmailpostcustomerregistrationplugin":[473],"postcustomerregistrationplugininterface":[473],"getpostcustomerregistrationplugins":[473],"inxmailcustomerrestorepasswordmailtypeplugin":[473],"mailtypeplugininterface":[473],"inxmailneworderplugin":[473],"inxmailordercanceledplugin":[473],"inxmailpaymentnotreceivedplugin":[473],"inxmailshippingconfirmationplugin":[473],"aws3v3filesystembuilderplugin":[477],"ftpfilesystembuilderplugin":[477],"localfilesystembuilderplugin":[477],"addfilesystembuilderplugincollection":[477],"plugin_collection_filesystem_builder":[477],"tidewaysmonitoringextensionplugin":[480],"newrelicmonitoringextensionplugin":[481],"logglyloggerqueuemessageprocessorplugin":[484],"queuemessageprocessorplugininterface":[484,564],"itemswithproductoptionsanddiscountsgrosspricecalculatorplugin":[488,540,594,650],"itemswithproductoptionsanddiscountstaxcalculatorplugin":[488,540,594,650],"expensetaxcalculatorplugin":[488,540,594,650],"itemsubtotalaggregatorplugin":[488,535,632,650],"ordertaxtotalcalculationplugin":[488,535,632,650],"calculatebundlepriceplugin":[488,650],"hydrateorderplugininterface":[488,618,650],"getorderhydrationplugins":[488,513,650],"discountorderhydrateplugin":[488,618,650],"gethydrateorderplugins":[488,650],"salesorderexpanderplugin":[488,630,650,704],"discounttotalamountwithproductoptionsaggregatorplugin":[488,535,632,650],"itemswithproductoptionsanddiscountstaxaggregatorplugin":[488,535,632,650],"orderdiscountswithproductoptionsaggregatorplugin":[488,535,632,650],"ordertaxamountwithproductoptionsanddiscountsaggregatorplugin":[488,535,632,650],"productoptiondiscountsaggregatorplugin":[488,535,632,650],"expensetotalaggregatorplugin":[488,535,632,650],"grandtotalaggregatorplugin":[488,535,632,650],"itemgrosspriceaggregatorplugin":[488,535,632,650],"itemtaxamountaggregatorplugin":[488,535,632,650],"orderexpensetaxamountaggregatorplugin":[488,535,632,650],"subtotalorderaggregatorplugin":[488,535,632,650],"productoptionsgrosspriceaggregatorplugin":[488,535,632,650],"subtotalwithproductoptionsaggregatorplugin":[488,522,627,650],"discounttotalamountaggregatorplugin":[488,535,632,650],"itemdiscountsorderaggregatorplugin":[488,535,632,650],"orderdiscountsaggregatorplugin":[488,535,632,650],"orderexpenseswithdiscountsaggregatorplugin":[488,535,632,650],"orderexpensetaxwithdiscountsaggregatorplugin":[488,535,632,650],"ordergrandtotalwithdiscountsaggregatorplugin":[488,535,632,650],"sessionquotestoragestrategyplugin":[489,646],"omspostsavehookplugin":[492],"productoptionordersaverplugin":[492,630,704],"productbundleordersaverplugin":[492],"ordershipmentsaveplugin":[492,630,704],"discountordersaveplugin":[492,505,630,653,704],"ordercustomersaveplugin":[492,630,668,704],"customerordersaveplugin":[492],"paymentsaverplugin":[492],"paymentordersaverplugin":[492],"salesordersaverplugin":[492,630,704],"cmsversionpagecollectorsearchplugin":[493,698],"cmsversionpagecollectorstorageplugin":[493,698],"usercmsversionpostsaveplugin":[493,698],"usercmsversiontransferexpanderplugin":[493,698],"gettransferexpanderplugins":[493,698],"storerelationtoggleformtypeplugin":[498,505,521,612,653,669],"createstorerelationformtypeplugin":[498,521,612,669],"cmspagecollectorparametermapexpanderplugin":[499,676],"cmspagecollectordataexpanderplugininterface":[499,676],"customerunsubscribeplugin":[503],"getcustomeranonymizerplugins":[503],"customeranonymizerplugininterface":[503],"storequotetransferexpanderplugin":[505,653],"getquotetransferexpanderplugins":[505,653],"quotetransferexpanderplugininterface":[505,653],"getstorerelationformtypeplugin":[505,653],"setdiscountconfigurationexpanderplugins":[505,653],"setdiscountpostcreateplugins":[505,653],"setdiscountpostupdateplugins":[505,653],"filterbycalculatorplugin":[505,653],"plugin_calculator_fixed":[505,601,653],"expensetaxwithdiscountscalculatorplugin":[506,540,594],"zedrequestmetadataproviderplugin":[509,702],"availabilityhandlerplugin":[512,685],"paymentorderhydrateplugin":[513],"priceproductabstractaftercreateplugin":[514,517,659,684],"priceproductabstractafterupdateplugin":[514,517,659,684],"priceproductabstractreadplugin":[514,517,659,684],"priceproductconcreteaftercreateplugin":[514,517,659,684],"priceproductconcreteafterupdateplugin":[514,517,659,684],"priceproductconcretereadplugin":[514,517,659,684],"priceproductdataimportplugin":[516],"getdataimporterplugins":[516],"getpricedimensionstoragereaderplugins":[516],"priceproductfilterplugininterface":[516],"pricedimensionabstractsaverplugininterface":[516],"pricedimensionconcretesaverplugininterface":[516],"pricedimensionquerycriteriaplugininterface":[516],"priceproductdimensionexpanderstrategyplugininterface":[516],"priceproductstoragepricedimensionplugininterface":[516],"pricedimensionabstractsaverplugin":[516],"pricedimensionconcretesaverplugin":[516],"priceproductstoragepricedimensionplugin":[516],"productpricequeryexpanderplugin":[517,659],"facetqueryexpanderplugin":[517,619,656,658,659],"productabstractaftercreateplugin":[517,659],"imagesetproductabstractaftercreateplugin":[517,659],"productabstractafterupdateplugin":[517,659],"imagesetproductabstractafterupdateplugin":[517,659],"productabstractreadplugin":[517,659],"imagesetproductabstractreadplugin":[517,659],"productconcreteaftercreateplugin":[517,659],"imagesetproductconcreteaftercreateplugin":[517,659],"productconcreteafterupdateplugin":[517,659],"imagesetproductconcreteafterupdateplugin":[517,659],"productconcretereadplugin":[517,659],"imagesetproductconcretereadplugin":[517,659],"productsearchproductconcreteaftercreateplugin":[517,659],"productsearchproductconcreteafterupdateplugin":[517,659],"productsearchproductconcretereadplugin":[517,659],"stockproductconcreteaftercreateplugin":[517,659],"stockproductconcreteafterupdateplugin":[517,659],"stockproductconcretereadplugin":[517,659],"taxsetproductabstractaftercreateplugin":[517,659],"taxsetproductabstractafterupdateplugin":[517,659],"taxsetproductabstractreadplugin":[517,659],"productabstractplugincreateinterface":[517,659],"getproductabstractbeforecreateplugins":[517,659],"getproductabstractaftercreateplugins":[517,659],"productabstractpluginreadinterface":[517,659],"getproductabstractreadplugins":[517,659],"productabstractpluginupdateinterface":[517,659],"getproductabstractbeforeupdateplugins":[517,659],"getproductabstractafterupdateplugins":[517,659],"productconcreteplugincreateinterface":[517,659],"getproductconcretebeforecreateplugins":[517,659],"getproductconcreteaftercreateplugins":[517,659],"productconcretepluginreadinterface":[517,659],"getproductconcretereadplugins":[517,530,659],"productconcretepluginupdateinterface":[517,659],"getproductconcretebeforeupdateplugins":[517,659],"getproductconcreteafterupdateplugins":[517,530,659],"cartbundleitemsprereloadplugin":[518,622],"getprereloadplugins":[518,622],"productbundlepriceaggregatorplugin":[518,535,622,632],"priceformtypeplugin":[521,669],"moneyformtypeplugin":[521,669],"createmoneyformtypeplugin":[521,669],"moneycollectionformtypeplugin":[522,538,626,627],"createmoneycollectionformtypeplugin":[522,538,626,627],"productoptionvaluepriceexistscartprecheckplugin":[523,700],"cartprecheckplugin":[523,700],"cartprecheckplugininterface":[523,700],"productsearchconfigextensioncollectorplugin":[528,647],"createsearchconfigexpanderplugins":[528,536,647,672],"productvalidityreadplugin":[530],"productvalidityupdateplugin":[530],"getcalculatorplugins":[535,632],"searchconfigexpanderplugininterface":[536,647,672],"moneycollectiontypeplugin":[538,626],"shipmentmethoddeliverytimeplugininterface":[538,560,595,626],"shipmentorderhydrateplugin":[538,618,626],"discounttotalswithproductoptionscalculatorplugin":[540,594],"taxtotalamountwithproductoptionsanddiscountscalculatorplugin":[540,594],"productimagecartplugin":[545],"itemexpanderplugininterface":[545,701],"getexpanderplugins":[545,550,645,701],"expondbundleitemswithimagesplugin":[545],"expandbundleitemswithimagesplugin":[545],"cartvariantattributemapperplugininterface":[545],"$cartvariantattributemapperplugin":[545],"cartvariantattributemapperplugin":[545],"storageproductmapperplugininterface":[545],"$storageproductmapperplugin":[545],"storageproductmapperplugin":[545],"productcategoryfiltercollectorplugin":[546],"productreviewcollectorsearchplugin":[546,554],"productabstractreviewcollectorstorageplugin":[546,554],"facetresultformatterplugin":[546,619,656,658],"productgroupcollectorstorageplugin":[547,655],"productabstractgroupscollectorstorageplugin":[547,655],"cmscontentwidgetplugininterface":[548,596],"getcmscontentwidgetplugins":[548,596],"cmstwigcontentrendererplugin`":[548,596],"getcmsblocktwigcontentrendererplugin`":[548,596],"cmscontentwidgetparametermapperplugininterface":[548,596],"getcmscontentwidgetparametermapperplugins":[548,596],"cmsblockcollectorparametermapexpanderplugin`":[548,596],"getcollectordataexpanderplugins`":[548,596],"cmspagecollectorparametermapexpanderplugin`":[548,596],"cmswidgetplugin":[548,596],"cmsproductskumapperplugin":[548,596],"cmsproductsetkeymapperplugin":[548,596],"permissioncustomerexpanderplugin":[549],"getcustomertransferexpanderplugins":[549],"customertransfercompanyuserexpanderplugin":[549],"customertransferexpanderplugininterface":[549],"giftcardcalculatorplugin":[550,645],"giftcardcurrencymatchdecisionruleplugin":[550,645],"getdecisionruleplugins":[550,645,682,695,703],"giftcardisactivedecisionruleplugin":[550,645],"giftcarddiscountableitemfilterplugin":[550,645],"getdiscountableitemfilterplugins":[550,645,701,703],"giftcardisuseddecisionruleplugin":[550,645],"giftcardmetadataexpanderplugin":[550,645],"giftcardorderitemsaverplugin":[550,645],"giftcardordersaverplugin":[550,645],"extendpaymentplugin":[550,645],"giftcardpaymentmethodfilterplugin":[550,645],"getpaymentmethodfilterplugins":[550,645],"giftcardprecheckplugin":[550,645],"giftcardrecreatevalueproviderplugin":[550,645],"getvalueproviderplugin":[550,645],"creategiftcardcommandplugin":[550,645],"extendcommandplugins":[550,645],"replacegiftcardscommandplugin":[550,645],"isgiftcardconditionplugin":[550,645],"extendconditionplugins":[550,645],"onlygiftcardshipmentmethodfilterplugin":[550,645],"getmethodfilterplugins":[550,645],"balancecheckerapplicabilityplugin":[550,645],"balancetransactionlogpaymentsaverplugin":[550,645],"getpaymentsaverplugins":[550,645],"giftcardbalancevalueproviderplugin":[550,645],"giftcarddeliverymailtypeplugin":[550,645],"giftcardusagemailtypeplugin":[550,645],"shipgiftcardbyemailcommandplugin":[550,645],"nopaymenthandlerplugin":[550,645],"nopaymentprecheckplugin":[550,645],"extendpaymentplugins":[550,645],"pricetopaypaymentmethodfilterplugin":[550,645],"paymentformfilterplugin":[550,645],"getpaymentformfilterplugins":[550,645],"paymentcalculatorplugin":[550,645],"queryexpanderplugininterface":[559,619,656,658],"sortedcategoryqueryexpanderplugin":[559],"createcatalogsearchqueryexpanderplugins":[559],"cartboostqueryexpanderplugin":[559],"catalogsearchqueryplugin":[559],"featuredproductsqueryplugin":[559],"shipmentmethodavailabilityplugininterface":[560,595],"shipmentmethodpriceplugininterface":[560,595],"rawcatalogsearchresultformatterplugin":[561],"personalizedproductsqueryplugin":[561],"missingqueuepluginexception":[564],"helloqueuemessageprocessorplugin":[564],"itemtaxamountcalculatorplugin":[578],"dhlexpressplugin":[595],"getavailabilityplugins":[595],"youravailabilityplugin":[595],"getpriceplugins":[595],"yourpriceplugin":[595],"getdeliverytimeplugins":[595],"yourdeliverytimeplugin":[595],"createsearchconfigplugin":[599,619,656,678],"facetsearchresultvaluetransformerplugininterface":[599,678],"createsearchconfigbuilderplugin":[599,619,656,678],"plugin_calculator_percentage":[601,616],"refundcalculatorplugininterface":[606,615],"cmsblockcategoryformplugin":[609,693],"getcmsblockformplugins":[609,665,693,697],"getcmsblockformpluginsq":[609,693],"cmsblockcategoryconnectorupdateplugin":[609,693],"getcmsblockupdateplugins":[609,665,693,697],"cmsblockcategoryconnectorcollectorplugin":[609,693],"categoryrelationupdateplugininterface":[609,693],"getrelationupdatepluginstack":[609,693],"categoryformplugin":[609,693],"getcategoryformplugins":[609,693],"cmsblockcategorylistviewplugin":[609,693],"getcmsblockviewplugins":[609,665,693,697],"postcmspageactivatorplugininterface":[611],"postcmspageactivatornavigationplugin":[611],"getcmspagepostactivatorplugins":[611],"$productdatapagemapplugin":[619,656],"productdatapagemapplugin":[619,656],"resultformatterplugininterface":[619,656,658],"matchallqueryplugin":[619,656,658],"paginatedqueryexpanderplugin":[619,656,658],"paginatedresultformatterplugin":[619,656,658],"sortedqueryexpanderplugin":[619,656,658],"sortedresultformatterplugin":[619,656,658],"abstractelasticsearchresultformatterplugin":[619,656,658],"dummyresultformatterplugin":[619,656,658],"myentityresourcecreatorplugin":[620],"plugin_my_entity_resource_creator":[620],"$productresourcecreatorplugin":[620],"customerpreconditioncheckerplugin":[630,704],"productsavailablecheckoutpreconditionplugin":[630,704],"commandplugininterface":[634,648],"conditionplugininterface":[634,648],"productrelationcollectorplugin":[643],"productsearchconfigexpanderplugin":[647],"$searchconfigexpanderplugins":[647],"plugin2":[648],"abstractcollectorplugin":[654],"navigationcollectorstorageplugin":[654],"productcollectorsearchplugin":[654],"productcollectorstorageplugin":[654],"categorynodecollectorstorageplugin":[654],"translationcollectorstorageplugin":[654],"pagecollectorstorageplugin":[654],"blockcollectorstorageplugin":[654],"redirectcollectorstorageplugin":[654],"urlcollectorstorageplugin":[654],"createsuggestionqueryexpanderplugins":[658],"spellingsuggestionqueryexpanderplugin":[658],"spellingsuggestionresultformatterplugin":[658],"suggestionbytypequeryexpanderplugin":[658],"suggestionbytyperesultformatterplugin":[658],"completionqueryexpanderplugin":[658],"completionresultformatterplugin":[658],"cmsblockproductformplugin":[665,697],"cmsblockproductconnectorupdateplugin":[665,697],"cmsblockproductconnectorcollectorplugin":[665,697],"cmsblockproductabstractlistviewplugin":[665,697],"cmsblockproductabstractblocklistviewplugin":[665,697],"getproductabstractviewplugins":[665,697],"productitemtaxcalculatorsplugin":[666],"productioptiontaxcalculatorsplugin":[666],"shipmenttaxcalculatorsplugin":[666],"flattaxratecalculatorplugin":[666],"newtaxratecalculatorplugin":[666],"checkoutstephandlerplugininterface":[668],"checkoutsubformplugininterface":[668],"createpaymentplugins":[668],"checkoutsubformplugincollection":[668],"checkoutstephandlerplugincollection":[668],"ordertotalsaggregateplugininterface":[670],"getitemamountaggregationplugins":[670],"getorderamountaggregationplugins":[670],"shipmentcarrierdecisionruleplugin":[682,695],"shipmentmethoddecisionruleplugin":[682,695],"shipmentpricedecisionruleplugin":[682,695],"itembyshipmentcarrierplugin":[682,695],"itembyshipmentmethodplugin":[682,695],"itembyshipmentpriceplugin":[682,695],"decisionruleplugininterface":[682,695,703],"collectorplugininterface":[682,695,703],"getcollectorplugins":[682,695,703],"shipmentcheckoutprecheckplugin":[695],"discountfilterpromotiondiscountsplugin":[701],"discountpromotioncalculationformexpanderplugin":[701,703],"discountpromotioncollectorstrategyplugin":[701],"discountpromotionconfigurationexpanderplugin":[701],"discountpromotionpostsaveplugin":[701],"discountpromotionpostupdateplugin":[701],"collectorstrategyplugininterface":[701,703],"getcollectorstrategyplugins":[701,703],"discountpostsaveplugininterface":[701,703],"getdiscountpostsaveplugins":[701],"discountpostupdateplugininterface":[701,703],"getdiscountpostupdateplugins":[701],"discountconfigurationexpanderplugininterface":[701,703],"getdiscountconfigurationexpanderplugins":[701],"discountformexpanderplugininterface":[701,703],"getdiscountformexpanderplugins":[701],"discountformdataproviderexpanderplugininterface":[701,703],"getdiscountformdataproviderexpanderplugins":[701,703],"discountpromotioncalculationformdataexpanderplugin":[701],"discountviewblockproviderplugininterface":[701,703],"getdiscountviewtemplateproviderplugins":[701,703],"discountpromotionviewblockproviderplugin":[701],"getdiscountapplicablefilterplugins":[701,703],"discountpromotionfilterapplicableitemsplugin":[701],"removepromotionitemscalculatorplugin":[701],"productpromotionmapperplugin":[701],"plugin_promotion_product_mapper":[701],"promotionproductmapperplugininterface":[701],"skudecisionruleplugin":[703],"itembyskucollectorplugin":[703],"discountableitemfilterplugininterface":[703],"nameofplugin":[703],"getdiscountpostsaveplugins`":[703],"getdiscountpostupdateplugins`":[703],"getdiscountconfigurationexpanderplugins`":[703],"discountapplicablefilterplugininterface":[703],},"luga":{"slugan":[327],},"lugan":{"slugan":[327],},"lugi":{"plugin":[22,24,26,32,34,36,39,42,56,67,69,70,71,88,102,113,117,136,155,156,165,166,177,186,197,230,232,261,263,264,265,266,274,275,280,283,288,307,320,324,325,326,337,338,342,351,352,366,388,399,401,404,405,407,413,415,420,430,433,435,436,438,456,464,466,471,473,477,481,484,487,488,489,492,493,498,499,501,502,503,504,505,506,508,509,512,513,514,516,517,518,521,522,523,528,534,535,536,538,540,545,546,547,548,549,550,552,554,559,560,561,563,564,565,578,580,587,588,593,594,595,596,597,598,599,600,601,605,606,609,611,612,614,615,616,617,619,620,622,626,627,629,630,631,632,633,634,639,643,645,646,647,648,650,653,654,656,658,659,665,666,668,669,670,671,672,676,678,682,684,685,693,694,695,697,698,700,701,702,703,704],"itemmetadatasaverplugin":[24,492],"plugins":[24,26,27,32,34,42,67,69,71,88,117,156,166,197,198,199,232,263,264,265,266,274,280,288,303,307,317,320,325,326,338,344,346,351,352,366,401,404,413,430,435,460,464,488,490,491,492,493,495,499,506,507,509,513,514,516,517,524,530,533,535,538,540,545,548,549,550,554,559,560,561,564,578,594,595,596,598,599,609,618,619,620,626,630,632,634,639,645,647,648,649,650,654,656,658,659,666,668,670,676,678,682,684,693,695,698,701,702,703,704],"productidhydratorplugin":[24],"productoptionsorthydrateplugin":[24],"productoptionorderhydrateplugin":[24,488,618,650],"customerorderhydrateplugin":[24],"itemmetadatahydratorplugin":[24],"productbundleidhydratorplugin":[24],"productoptiongroupidhydratorplugin":[24],"getquotecalculatorpluginstack":[24,71,488,550,645,650,701],"initialgrandtotalcalculatorplugin":[24,488,650],"isactiveindaterangequeryexpanderplugin":[27,658],"isactivequeryexpanderplugin":[27,658],"checkoutavailableshipmentmethodsplugin":[32,538,626],"productbundleorderhydrateplugin":[32,618],"abstractplugin\u0027s":[34],"removepaymentcartpostsaveplugin":[36],"getpostsaveplugins":[36,493,698],"productcartplugin":[67,69],"cartitempriceplugin":[67,69,70,155,488,639,650],"cartitemproductoptionplugin":[67,69,70],"skugroupkeyplugin":[67,287],"cartitemgroupkeyoptionplugin":[67],"getcartprecheckplugins":[67,487,523,605,700],"productexistscartprecheckplugin":[67],"cartbundleavailabilityprecheckplugin":[67],"checkavailabilityplugin":[67,117,487,598,605],"calculatorplugininterface":[69,71,351,506,578,666],"removetotalscalculatorplugin":[69,71,351,488,650,701],"removeallcalculateddiscountscalculatorplugin":[69,71,488,650,701],"itemgrossamountscalculatorplugin":[69,71,351],"productoptiongrosssumcalculatorplugin":[69,71,351,488,650],"subtotaltotalscalculatorplugin":[69,71,351],"expensesgrosssumamountcalculatorplugin":[69,71,351],"expensetotalscalculatorplugin":[69,71,351],"discountcalculatorplugin":[69,70,71,488,506,650],"sumgrosscalculateddiscountamountcalculatorplugin":[69,71,488,540,594,650],"discounttotalscalculatorplugin":[69,71,540,594],"grandtotaltotalscalculatorplugin":[69,71,351],"grandtotalwithdiscountscalculatorplugin":[69,71],"taxtotalscalculatorplugin":[69,71,540,594],"grandtotalcalculatorplugin":[69,70,488,535,632,650],"calculatorplugin":[69],"subtotalcalculatorplugin":[70,488,535,632,650],"expensetotalcalculatorplugin":[70,488,535,632,650],"discounttotalcalculatorplugin":[70,488,535,632,650],"taxtotalcalculatorplugin":[70,488,650],"refundtotalcalculatorplugin":[70,488,535,632,650],"canceledtotalcalculationplugin":[70,488,535,632,650],"pricecalculatorplugin":[70,488,535,632,650],"productitemtaxratecalculatorplugin":[70,488,540,594,650],"refundableamountcalculatorplugin":[70,488,535,632,650],"taxamountcalculatorplugin":[70,488,534,535,540,594,597,632,650],"itemtaxamountfullaggregatorplugin":[70,488,535,632,650],"itemproductoptionpriceaggregatorplugin":[70,488,535,632,650],"discountamountaggregatorplugin":[70,488,535,632,650],"itemdiscountamountfullaggregatorplugin":[70,488,535,632,650],"pricetopayaggregatorplugin":[70,488,535,632,650],"taxrateaverageaggregatorplugin":[70,488,650],"taxamountaftercancellationcalculatorplugin":[70,488,534,535,540,594,597,632,650],"productoptiontaxratecalculatorplugin":[70,488,540,594,650],"shipmenttaxratecalculatorplugin":[70,488,540,594,650],"getordercalculatorpluginstack":[71,488,650],"calculationplugininterface":[71],"cmspageparametermapexpanderplugin":[88,499,676],"cmspagedataexpanderplugininterface":[88,499,676],"getcmspagedataexpanderplugins":[88,499,676],"cmspagetableexpanderplugin":[88],"cmspagetableexpanderplugininterface":[88],"getcmspagetableexpanderplugins":[88],"createglossaryexpanderplugin":[88],}});