define({"528":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-product-search.htm",a:"Upgrading from Version 3.* to Version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"529":{i:0.00125326003083188,u:"../content/module_migration_guides/mg-product-set-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we have support multi-currency. First of all make sure you  have migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you overwrote ...",t:"Migration Guide - Product Set GUI"},"530":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-product-validity.htm",a:"Installing Version 1.* The Product Validity module is responsible for (de)activation of products for (or starting from) a certain period of time. Follow the instructions below to have the module up and running in your shop. Database Changes \n            We have added a new  spy_product_validity ...",t:"Migration Guide - Product Validity"},"531":{i:0.00516266281788793,u:"../content/module_migration_guides/mg-quote.htm",a:" Upgrading from Version 1.* to Version 2.* The new version of Quote module provides the ability to save customer quote into the database and get it. Quote storage strategy (session, database) can be changed in Spryker\\Shared\\Quote\\QuoteConfig::getStorageStrategy. If you’re migrating the Quote module ...",t:"Migration Guide - Quote  "},"532":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-rabbitmq.htm",a:" Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module  Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: bindingQueue ...",t:"Migration Guide - RabbitMQ  "},"533":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-refund.htm",a:" Upgrading from Version 4.* to Version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund    "},"534":{i:0.0114823479217076,u:"../content/module_migration_guides/mg-sales.htm",a:" Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multi-currency support, this release added two new fields to spy_sales table to persist \"currency\" and \"store\". Also Order saver now stores currency and store where order is placed.\n\n            Run the ...",t:"Migration Guide - Sales    "},"535":{i:0.00447564399372864,u:"../content/module_migration_guides/mg-sales-aggregator.htm",a:" Upgrading from Version 4.* to Version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator    "},"536":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-search.htm",a:"Upgrading from Version 7.* to Version 8.* \n                    With this version of the Search module we have migrated to Elasticsearch 5.6. Please read the\n                     Elasticsearch\n                    Breaking Changes in 5.0  official documentation to adjust your custom implementation ...",t:"Migration Guide - Search"},"537":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-setup.htm",a:" Upgrading from Version 3.* to Version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"538":{i:0.00100773504654929,u:"../content/module_migration_guides/mg-shipment.htm",a:"Upgrading from Version 5.* to Version 6.* In version 6, multi-currency prices are introduced for shipment methods, allowing to set up different net and gross price per shipment method for each preconfigured currency. The spy_shipment_method.default_price database column becomes deprecated. Shipment ...",t:"Migration Guide - Shipment"},"539":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-step-engine.htm",a:" Upgrading from Version 2.* to Version 3.*\n \nIf you\u0027re migrating the StepEngine module from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine  "},"540":{i:0.00380270462301669,u:"../content/module_migration_guides/mg-tax.htm",a:" Upgrading from Version 4.* to Version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax  "},"541":{i:0.00339341866496336,u:"../content/module_migration_guides/mg-touch.htm",a:" Upgrading from Version 3.* to Version 4.* Update/install spryker/touch to at least 4.0.0 version. Install the new database columns by running vendor/bin/console propel:diff. Propel should generate a migration file with the changes. Run vendor/bin/console propel:migrate to apply the database ...",t:"Migration Guide - Touch    "},"542":{i:0.000577703312957264,u:"../content/module_migration_guides/mg-transfer.htm",a:" Upgrading from Version 2.* to Version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer  "},"543":{i:0.00100773504654929,u:"../content/module_migration_guides/mg-wishlist.htm",a:" Upgrading from Version 5.* to Version 6.* With the implementation of the quote storage strategies, the new version 5.0.0 of the Cart module has been released. The Wishlist module is dependent on it, so make sure your Cart module\u0027s version is 5.0.0 or higher. CartClientInterface::storeQuote is ...",t:"Migration Guide - Wishlist "},"544":{i:0.000823228297239856,u:"../content/feature_integration_guides/about-integration.htm",a:"The integration guides provide step-by-step instructions on how to enable individual Spryker features for your project.  Please keep in mind, that since Spryker Commerce OS is a highly modular system, you have total freedom in choosing what features to add to your project. When making a decision to ...",t:"About Integration Guides"},"545":{i:0.000577703312957264,u:"../content/feature_integration_guides/cart_-integration.htm",a:" This article describes how to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker Super Attributes.  UI Changes: Cart now supports changing the items in the cart by modifying their attributes. If we have ...",t:"Cart Integration   "},"546":{i:0.000577703312957264,u:"../content/feature_integration_guides/category-filter-feature-integration.htm",a:"Prerequisites To prepare your project to work with the Category Filters: Require the Category Filters modules in your composer by running\n         composer require spryker/product-category-filter composer require spryker/product-category-filter-collector composer require ...",t:"Feature Integration - Category Filters"},"547":{i:0.000577703312957264,u:"../content/feature_integration_guides/product-group-feature-integration.htm",a:"Prerequisites To prepare your project to work with Product groups: Require the Product Group bundles in your composer.json by running composer require spryker/product-group spryker/product-group-collector. Install the new database tables. By running vendor/bin/console propel:diff. Propel should ...",t:"Feature Integration - Product Group"},"548":{i:0.000577703312957264,u:"../content/feature_integration_guides/enabling-cms-widget.htm",a:" \n\t\t\tCMS content widgets is a CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update composer.json ...",t:"Enabling the Content Widget  "},"549":{i:0.000577703312957264,u:"../content/feature_integration_guides/permissions-feature-integration.htm",a:"The Permissions feature is shipped with following modules: To install the feature, follow the steps below. 1. Install necessary modules using composer composer update \"spryker/*\" \"spryker-shop/*\" composer require spryker/permission-extension:\"^1.0.0\" spryker/permission:\"^1.0.0\" 2. Add plugins to ...",t:"Permissions Feature Integration"},"550":{i:0.000577703312957264,u:"../content/feature_integration_guides/enabling-gift-cards.htm",a:" The Gift Cards feature is shipped with the following modules: GiftCard: implements basic functionality of the Gift Cards feature as  well as the  Replacement value-checking strategy . GiftCardBalance: implements gift card  Balance value-checking strategy . GiftCardMailConnector: responsible for ...",t:"Enabling Gift Cards"},"551":{i:0.000577703312957264,u:"../content/feature_integration_guides/payment-provider-integration.htm",a:" The Spryker Commerce OS offers integrations with several payment providers that can be used in the checkout and order management. Easily define the availability of a provider based on customer preferences and local regulations and specify the order the providers are displayed in during checkout.\n",t:"Payment Provider Integration    "},"552":{i:0.000577703312957264,u:"../content/feature_integration_guides/product-relation-integration.htm",a:"Register a new collector plugin. How to is in .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\ProductRelationTwigServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This will allow to use the UI carousel component ...",t:"Product Relation Integration"},"553":{i:0.00106875328152245,u:"../content/feature_integration_guides/product-review-feature-configuration.htm",a:"Configuring the Maximum Rating To change the maximum allowed rating, alter the Client configuration by extending the \\Spryker\\Client\\ProductReview\\ProductReviewConfig class in your project directory. Override getMaximumRating method to return the desired selectable maximum rating value. \n        ...",t:"Feature Configuration - Product Reviews"},"554":{i:0.000577703312957264,u:"../content/feature_integration_guides/product-review-feature-integration.htm",a:"Prerequisites To prepare your project to work with Product Reviews: Require the Product Review modules in your composer by running\n             composer require spryker/product-review composer require spryker/product-review-collector composer require spryker/product-review-gui Install the new ...",t:"Feature Integration - Product Reviews"},"555":{i:0.000577703312957264,u:"../content/feature_integration_guides/product-store-relation-feature-integration.htm",a:"General Information \n            By default abstract products are available in all stores. This feature provides additional configuration when:\n             you have multiple stores, and you want to manage the appearance of abstract products per store. Prerequisites To prepare your project to work ...",t:"Feature Integration - Multi-Store Products"},"556":{i:0.000577703312957264,u:"../content/tutorials/about-tutorials.htm",a:" Welcome to Spryker Tutorials, in this section of the documentation you will find instructions on how to perform all types of tasks with Spryker Commerce OS If you are a PHP developer who is new to Spryker, visit our free online Bootcamp Training for a crash introduction course to Spryker. Check out ...",t:"About Tutorials "},"557":{i:0.000577703312957264,u:"../content/tutorials/introduction/introduction-tutorials.htm",a:"Introduction Tutorials Introduction tutorials describe how to perform basic tasks with the Spryker Commerce OS. (missing or bad snippet)",t:"Introduction Tutorials"},"558":{i:0.000577703312957264,u:"../content/tutorials/introduction/architectural-walkthrough.htm",a:"This is an architecture walkthrough as a coding exercise. Challenge Description Build a HelloSpryker (Undefined variable: General.bundle/module) in Zed that will render the Hello Spryker! string, in reverse order, on the screen. The string must be retrieved from the config. Build a HelloSpryker ...",t:"Tutorial - Architectural Walkthrough"},"559":{i:0.000577703312957264,u:"../content/tutorials/introduction/boosting-cart-based-search.htm",a:"Challenge Description Based on the colors of the products that are in the cart of the user, the catalog should first display products that have the same color. Let’s say for example that there’s a red product in the cart, then the top results in the catalog should also contain red products. ...",t:"Tutorial - Boosting Cart Based Search"},"560":{i:0.000577703312957264,u:"../content/tutorials/introduction/checkout.htm",a:"Challenge Description Integrate an additional step into the checkout process; a Voucher step where a customer enters a voucher code and gets a discount. Add the Voucher step after the Payment one. To explore further before starting, you can read about the  Checkout  and the  StepEngine  modules. ...",t:"Tutorial - Checkout"},"561":{i:0.000577703312957264,u:"../content/tutorials/introduction/dynamic-content-page.htm",a:"Challenge Description Create a CMS page that displays some (marketing) text and a list of personalized products as offers. Challenge Solving Highlights Static page For creating a CMS page, follow these steps: Create a CMS template called personalized_products.twig under ...",t:"Tutorial - Dynamic Content Page"},"562":{i:0.000577703312957264,u:"../content/tutorials/introduction/hello-world.htm",a:"Challenge Description Build a HelloWorld  module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker Code Generator console ...",t:"Tutorial - Hello World"},"563":{i:0.000577703312957264,u:"../content/tutorials/introduction/oms-state-machine.htm",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"564":{i:0.000577703312957264,u:"../content/tutorials/introduction/setup-hello-world-queue.htm",a:"This Tutorial demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"Tutorial - Set Up a \"Hello World\" Queue"},"565":{i:0.00209386816744736,u:"../content/tutorials/introduction/handling-data-publish-and-synchronization.htm",a:"Tutorial - Handling Data - Publish and Synchronization Challenge Description Publish and Synchronization (P\u0026S) allows exporting data from Spryker backend (Zed) to external endpoints (by default, Redis and Elasticsearch). The endpoints are usually consumed by frontend applications (including Yves). ...",t:"Handling Data - Publish and Synchronization"},"566":{i:0.000577703312957264,u:"../content/tutorials/introduction/stores.htm",a:"Challenge Description Override a Zed core module on project level, and then override it on store level. You can also repeat the same challenge for a Yvesmodule Challenge Solving Highlights Project Level Let’s first override on the project level. Add an IndexController::indexAction() to ...",t:"Tutorial - Stores"},"567":{i:0.000577703312957264,u:"../content/tutorials/howtos/how-tos.htm",a:"HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  ...",t:"HowTos"},"568":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-case-sensitive-file-system-mac.htm",a:"By default Mac OS uses a case-insensitive file system to support compatibility to applications (e.g. Photoshop) provided for the operating system. The file-system itself is capable of working in a case-sensitive mode. There are a number of options on how to change case sensitivity: Re-partition the ...",t:"HowTo - Handling Case Sensitive File-System on Mac OS"},"569":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-data-import.htm",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"570":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-extend-inuse-core.htm",a:"This topic describes how to extend a core (Undefined variable: General.bundle/module) that is used by another core (Undefined variable: General.bundle/module).\n\n Extra consideration must be taken when extending core (Undefined variable: General.bundles/modules) that are already in use by another ...",t:"HowTo - Extend a Core (Undefined variable: General.Bundle/Module) That is Used by Another"},"571":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-force-https.htm",a:"The following article describes how you can force to use HTTPS in your pages. Load balancer If your servers are behind a load balancer and the load balancer is doing the redirects from HTTP to HTTPS, you don\u0027t need to further configure the application.\n         Application Configuration Force HTTPS ...",t:"HowTo - Force HTTPS"},"572":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-mvp-project-structuring.htm",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"573":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-product-data-import-frontend.htm",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Importing Products to the SQL Database\n Products are imported in the SQL database through the Importer (Undefined variable: General.bundle/module). The ...",t:"HowTo - Product Data from Import to Front-End View"},"574":{i:0.000577703312957264,u:"../content/tutorials/howtos/ht-setup-spryker-with-mysql.htm",a:"Spryker supports MySQL database and for installing it with this database, follow these instructions to adjust the configuration. MySQL Version Currently Spryker works only with MySQL version 5.7 or higher.  Adjusting Spryker to Run with MySQL \n    For running the Spryker Demoshop with MySQL, it is ...",t:"HowTo - Setup Spryker with MySQL"},"575":{i:0.000577703312957264,u:"../content/tutorials/advanced/advanced-tutorials.htm",a:"Advanced Tutorials Advanced tutorials describe advanced Spryker OS activities. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"advanced_tutorials"},"576":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-add-button-table.htm",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"577":{i:0.00149575531196731,u:"../content/tutorials/advanced/t-add-new-bundle.htm",a:"In this tutorial we will create a test (Undefined variable: General.bundle/module): HelloWorld (Undefined variable: General.bundle/module); the (Undefined variable: General.bundle/module)’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new ...",t:"Tutorial - Adding a New Module"},"578":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-calculator-plugin.htm",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  (Undefined variable: ...",t:"Tutorial - Calculator Plugin"},"579":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-console-commands.htm",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"580":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-create-table-view.htm",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new (Undefined variable: General.bundle/module) ( Tutorial - Adding a New Module ). Create a QueryContainer Create the QueryContainer class in the HelloWorld (Undefined variable: ...",t:"Tutorial - Creating a Table View"},"581":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-customer-import.htm",a:"This tutorial describes the steps you need to follow in order to extend the Importer (Undefined variable: General.bundle/module) functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data file In order to import ...",t:"Tutorial - Customer Import"},"582":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-database-transactions.htm",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"583":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-extend-db-schema.htm",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"584":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-extend-spryker.htm",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker. The project consists of two parts : Spryker-Core and project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"585":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-internationalization.htm",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"586":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-new-relic-monitoring.htm",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"587":{i:0.00100470534340212,u:"../content/tutorials/advanced/t-transfer-data-yves-zed.htm",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"588":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-twig-extensions.htm",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the (Undefined variable: ...",t:"Tutorial - Twig Extensions"},"589":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-using-translations.htm",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"590":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-working-filter-facets.htm",a:"A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets"},"591":{i:0.00385087804054445,u:"../content/tutorials/advanced/t-working-forms.htm",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"592":{i:0.00385087804054445,u:"../content/tutorials/advanced/t-working-tables.htm",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"593":{i:0.000577703312957264,u:"../content/tutorials/advanced/t-yves-bootstrap.htm",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"594":{i:0.00747275558432758,u:"../content/capabilities/tax/mg-tax.htm",a:" Upgrading from Version 4.* to Version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax  "},"595":{i:0.0018735273027382,u:"../content/capabilities/shipment/shipment-methods-plugins.htm",a:" The main concerns regarding shipping services are : availability : is the shipping method available to deliver the order? price : how is the delivery price calculated ? delivery time : when will the order be delivered ? For each of these concerns, an optional plugin is linked to each shipping ...",t:"Shipment Methods Plugins  "},"596":{i:0.0017633257913042,u:"../content/capabilities/cms/cms_widget/enabling-cms-widget.htm",a:" \n\t\t\tCMS content widgets is a CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update composer.json ...",t:"Enabling the Content Widget  "},});