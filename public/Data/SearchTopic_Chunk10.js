define({"730":{i:0.000620576166507547,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-be.htm",a:" To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End   "},"731":{i:0.00200256364853701,u:"../content/capabilities/search_and_filter/search.htm",a:" One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search    "},"732":{i:0.0117240730123113,u:"../content/capabilities/payment/refund/refund.htm",a:" Refund Refund manages the retour refund process. Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates refundable amount for the sales order saveRefund(RefundTransfer $refundTransfer) persists the calculated refund ...",t:"Refund    "},"733":{i:0.00647953419737672,u:"../content/capabilities/cms/cms_block/mg-cms-block.htm",a:"Migration Guide - CMS Block  Upgrading from Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can ...",t:"Migration Guide - CMS Collector"},"734":{i:0.00125844203535356,u:"../content/capabilities/cms/mg-cms-collector.htm",a:" Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"735":{i:0.00243509306986692,u:"../content/capabilities/development/file_system/filesystem-api.htm",a:" Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API  "},"736":{i:0.00100988140986196,u:"../content/capabilities/cart/calculation/calculation-plugins.htm",a:" \nCalculator plugins are registered in the CalculationDependencyProvider::getQuoteCalculatorPluginStack() for QuoteTransfer and CalculationDependencyProvider::getOrderCalculatorPluginStack() or in later versions of the Calculation module 4.00 and above ...",t:"Calculator Plugins    "},"737":{i:0.00161253317422901,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector-console.htm",a:" Click here to expand CMS Block Category Connector Migration script \n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace ...",t:"Migration Guide - CMS Block Category Connector Migration Console   "},"738":{i:0.00468143823783336,u:"../content/capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"739":{i:0.000724157856116054,u:"../content/capabilities/checkout/payment-shipment-methods.htm",a:"ML Multi-language ,  MC Multi-currency The Spryker Commerce OS offers integrations with several payment and shipment providers that can be offered to the customers during the checkout process.\nThe selection of shipment methods can be arranged by carrier and availability. Payment methods can easily ...",t:"Payment and Shipment Methods"},"740":{i:0.000534280990898665,u:"../content/capabilities/development/architecture-sniffer.htm",a:" We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Architecture Sniffer Tool"},"741":{i:0.00110528229079598,u:"../content/capabilities/shipment/shipment-overview.htm",a:" The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The shipment method is linked to the sales order. The schema below shows how these entities are modeled in the database : A sales order has associated a shipment method. Each shipment method ...",t:"Shipment Overview  "},"742":{i:0.00424895093952862,u:"../content/capabilities/tax/tax-2-0.htm",a:" The latest version of this module can be found here  Tax Version 1.0   Spryker allows to define different tax sets that include one to many different tax rates. Tax Set - Tax Rate Association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : ...",t:"Tax Version 2.0   "},"743":{i:0.00460192929371626,u:"../content/capabilities/order_management/mg-oms.htm",a:" Upgrading from Version 7.* to Version 8.* \n            With the new OMS version, detail lock logging has been introduced and execution bucket size decreased.\n In order to successfully migrate to the new OMS version, perform the following steps:  Migrate the DB:\n                 vendor/bin/console ...",t:"Migration Guide - OMS    "},"744":{i:0.000620576166507547,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-shared.htm",a:" As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared   "},"745":{i:0.00182147608596103,u:"../content/capabilities/price/money.htm",a:" Money Handling monetary values can be a problem and is often quite hard. The Money bundle makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money  "},"746":{i:0.00456816254195418,u:"../content/capabilities/order_management/state_machine/state-machine-patterns.htm",a:" Process Patterns The State Machine Cook Book describes how to build a state machine with the elements state, transition and event. However there are some recurring design problems that are needed in many processes. In this article common problems and their solution with state machine snippets are ...",t:"State Machine Patterns    "},"747":{i:0.000687970892129232,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-implement-invoice-payment.htm",a:" Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment   "},"748":{i:0.000620576166507547,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-test.htm",a:"HowTo - Implement Invoice Payment - Test  When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test   "},"749":{i:0.00114786722889167,u:"../content/capabilities/inventory_management/stock.htm",a:" Stock defines physical amount of products you have in your whorehouse. This article will tell you how the stock module works and how product stock is calculated. Multiple Storage Locations Spryker allows to define several storage locations in which the products are being stored. For a product we ...",t:"Stock    "},"750":{i:0.000598609363252971,u:"../content/capabilities/product_management/product_relation/product-relation-query-builder.htm",a:" Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation    "},"751":{i:0.000594448767955946,u:"../content/capabilities/development/zed_api/zed-api-config.htm",a:" First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration    "},"752":{i:0.000534280990898665,u:"../content/capabilities/development/logger.htm",a:" Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger    "},"753":{i:0.000844060860938793,u:"../content/capabilities/search_and_filter/search_preferences.htm",a:" In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences  "},"754":{i:0.00735056497267547,u:"../content/capabilities/cms/cms_block/cms-block-multistore.htm",a:" MS Multi-store Overview The multi-store CMS block feature enables you to manage CMS blocks display per stores through a store toggle element on CMS Block management pages in the Administration Interface. By default CMS Blocks are available in all stores. This feature provides additional ...",t:"Multi-store CMS Block   "},"755":{i:0.00141213055132866,u:"../content/capabilities/cms/cms_block/cms-block-category-connector.htm",a:" Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  related to toys and sweets. We want to apply the ...",t:"CMS Block Category Connector"},"756":{i:0.00285160316153182,u:"../content/capabilities/promotions_and_discounts/discount.htm",a:" Discount The Discount module is responsible for managing discounts in the Spryker OS. Overview In the diagram below you can see how the discount details are stored in the database: The spy_discount_voucher_pool table purpose is to group the vouchers codes generated for each discount. You can ...",t:"Discount    "},"757":{i:0.00141566665406619,u:"../content/capabilities/shipment/shipment-module-overview.htm",a:" The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The schema below shows how the sales order and shipment method entities are modeled in the database: A sales order has an associated sales shipment entity which has an associated sales ...",t:"Shipment Module Overview    "},"758":{i:0.00125881001445293,u:"../content/capabilities/cms/cms_page/content-fields-max-size.htm",a:"               By default CMS module doesn\u0027t specify the content field size.\n                Based on your DB (MySql or PostgreSql), it will be transferred to TEXT (65535 bytes) and TEXT (unlimited length) respectively.\n                In case your project requires more, you can redefine field size ...",t:"Defining Maximum Size of Content Fields   "},"759":{i:0.00211214032630987,u:"../content/capabilities/cms/cms_block/product-block.htm",a:"Product Block  MS Multi-store ,  ML Multi-language Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with ...",t:"CMS Block Product Connector"},"760":{i:0.00357813952904902,u:"../content/capabilities/development/queue/queue-msg-processor.htm",a:" Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin  "},"761":{i:0.00141459972119568,u:"../content/capabilities/cms/mg-cms.htm",a:" Upgrading from Version 4.* to Version 5.* CMS version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"762":{i:0.000558754981534883,u:"../content/capabilities/product_management/product/product-recommendations.htm",a:"Product Recommendations  With the Product Recommendations feature you can show your customers similar or complementary items while browsing the store.",t:"Product Recommendations   "},"763":{i:0.00101543033190522,u:"../content/capabilities/product_management/mg-product-option-cart-connector.htm",a:"Upgrading from Version 4.* to Version 5.* Update spryker/product-option to at least version 6.0.0. You can find additional information to product option module upgrade:  here . Install/Update spryker/price to at least version 5.0.0.  Update spryker/product-option-cart-connector to version 5.0.0. \n   ...",t:"Migration Guide - Product Option Cart Connector"},"764":{i:0.000907601265376793,u:"../content/capabilities/promotions_and_discounts/discount-promotion.htm",a:" \n           For marketing reasons shops sometimes give away free products depending on the cart content. This could be for example when the cart value is high to give away some free perks.\n           Or for example when the customer buys certain product to give away some other product that is ...",t:"Discount Promotion    "},"765":{i:0.00356161105055808,u:"../content/capabilities/development/install-tool.htm",a:" Spryker offers an install tool which can be used to install the system as described in the install recipe file(s). Installation Install the module with composer by running the following command: \n        composer require spryker/install\n         After the installation you can run the command with ...",t:"Install Tool    "},"766":{i:0.000534280990898665,u:"../content/capabilities/development/data-feed.htm",a:" BETA version\n This (Undefined variable: General.bundle/module) is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed module helps to query abstract products, categories, prices, availability data and related information for exporting or processing. The ...",t:"Data Feed Modules    "},"767":{i:0.000907601265376793,u:"../content/capabilities/promotions_and_discounts/discount-ext-module.htm",a:"The main components that describe a discount are: discount collector: Specifies for which items discount is being applied/calculated. Example: The discount can be applied for a specific set of products or for orders that contain a minimum number of items or for orders that have a minimum grand total ...",t:"Extending the Discount Module"},"768":{i:0.00591380914274163,u:"../content/capabilities/checkout/checkout-placing-the-order.htm",a:" After the customer clicks the submit button during the SummaryStep, the PlaceOrderStep is started. This step takes the QuoteTransfer` and starts the checkout workflow to store the order into the system. Zed Checkout module contains a number of plugins where you can add additional behavior, check ...",t:"Placing the Order — Checkout   "},"769":{i:0.000534280990898665,u:"../content/capabilities/development/code-sniffer.htm",a:" To correspond to  PSR-2 standards , we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer. Code Sniffer is a very powerful tool that helps to keep the code clean and prevent simple mistakes. The sniffer can find all the issues, and can also auto-fix most of them (when used with -f ...",t:"Code Sniffer"},"770":{i:0.000534280990898665,u:"../content/capabilities/development/installer.htm",a:" ML Multi-language ,  MS Multi-store ,  MC Multi-currency The Installer module is responsible of managing the installment process of required database data  in any environment. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: ...",t:"Installer    "},"771":{i:0.0010066826626834,u:"../content/capabilities/order_management/manual-order-creation.htm",a:" MC Multi-currency Allow your sales agents to create orders manually. In the Administration Interface users can effortlessly create orders, enter the relevant checkout information and place the order on behalf the customer. \nThe order entry form, out of the box, is optimized for processing orders ...",t:"Manual Order Creation    "},"772":{i:0.000929841677058361,u:"../content/capabilities/checkout/checkout-functionality.htm",a:" Yves Step Processing Checkout in Spryker  demoshop  uses a StepEngine step process to navigate customer step by step through checkout. The checkout process creates a generic approach for step processing; each step knows how to handle the form data, where it has to store data and which conditions ...",t:"Checkout StepEngine   "},"773":{i:0.00130661446481523,u:"../content/capabilities/gift_cards/gift-cards-purchase-redeeming.htm",a:" Gift Cards are sensible data and can be used to pay orders, therefore please keep in mind that they should be protected just like real money. This article describes general concepts of gift cards, their purchase and redeeming process as well as various use case scenarios. Introduction In the ...",t:"Gift Cards Purchase and Redeeming "},"774":{i:0.000634072617585031,u:"../content/capabilities/internationalization/glossary/glossary-how-translations-managed.htm",a:" The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed    "},"775":{i:0.00357813952904902,u:"../content/capabilities/development/queue/queue-adapter.htm",a:"Default Queue Adapter  Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter   "},"776":{i:0.0058592551165585,u:"../content/capabilities/cms/cms_block/mg-cms-block-collector.htm",a:"Migration Guide - CMS Block Collector  Upgrading from Version 1.* to Version 2.* This version provides support for multi-store CMS Block handling. Update spryker/cms-block-collector module to at least Version 2.0.0. Update spryker/collector module to at least Version 6.0.0. You can find additional ...",t:"Migration Guide - CMS Collector"},"777":{i:0.000534280990898665,u:"../content/capabilities/development/modules.htm",a:" A module is a group of files (PHP classes, test classes, configuration files, CSS files, etc) that refer to one concept and it’s written in a way that it makes it usable by other modules. Modules can be logically divided into categories where some are mandatory and necessary for running the OS and ...",t:"Module Guide    "},});