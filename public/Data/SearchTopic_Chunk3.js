define({"219":{i:0.00735046803778193,u:"../content/capabilities/development/collector/collector-development.htm",a:" The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the Touch mechanism. Each collector ...",t:"Development - Collector "},"220":{i:0.0048988329953078,u:"../content/capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"221":{i:0.0048988329953078,u:"../content/capabilities/development/collector/collector-sched-collector-jobs.htm",a:" The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs "},"222":{i:0.0048988329953078,u:"../content/capabilities/development/collector/collector-types.htm",a:" Data Collection\n\nData aggregation is a complex process of transforming scattered data between different resources, into a new one, usually smaller then the input. There are two basic Collector Types, depending on the way the data is being collected.\n\n AbstractPdoCollector - uses PHP Data Objects ...",t:"Collector Types "},"223":{i:0.00538345482923378,u:"../content/capabilities/development/event/event.htm",a:" The Event module implements an Observer pattern where you can add hooks (events) to your code and allow other modules to listen and react to those events.\n\n There are two methods:\n\n Traditional Synchronous where listeners are handled at the same time as they are dispatched\n Asynchronous (Queueable) ...",t:"Event"},"224":{i:0.00413602210914177,u:"../content/capabilities/development/event/event-adding.htm",a:" When adding an event, make sure you first decide what kind of events you want to trigger in your code. Events are stored in a class for later use, by adding its literal string value (ModuleName.subject.action). This value uniquely identifies an event in the event module, and all listeners attached ...",t:"Adding Events  "},"225":{i:0.00413602210914177,u:"../content/capabilities/development/event/event-asynch.htm",a:"Asynchronous Events  An asynchronous event can be created by using the addListenerQueued method instead of addListener. The difference is that it queues the event to be processed later by another process/consumer. You must have queue configured before using this feature, see bellow.",t:"Asynchronous Events  "},"226":{i:0.00413602210914177,u:"../content/capabilities/development/event/event-configure-q.htm",a:" Implementation is already present in demoshop and all code samples can be found there. To implement an events queue: Click to expand the code sample \u003c?php\nnamespace Pyz\\Client\\RabbitMq;\n\nuse ArrayObject;\nuse Generated\\Shared\\Transfer\\RabbitMqOptionTransfer;\nuse ...",t:"Configuring an Events Queue  "},"227":{i:0.00413602210914177,u:"../content/capabilities/development/event/event-listen.htm",a:" There are two ways to listen to events, using direct listeners or subscribers. The difference between these two is that a subscriber allows the module providing the subscriber to wire up the handlers in the module that owns it without touching the EventDependencyProvider exception’s initial ...",t:"Listening to Events  "},"228":{i:0.00413602210914177,u:"../content/capabilities/development/event/event-priority.htm",a:" The Event Collector \\Spryker\\Service\\Event\\Dependency\\EventCollectionInterface uses a priority queue store events so each that event can have different priority and will be executed in correct order when triggered. For example: \u003c?php\n$eventCollection\n    ...",t:"Listener Priority  "},"229":{i:0.00415193795974527,u:"../content/capabilities/development/file_system/filesystem.htm",a:" The FileSystem Service provides an abstraction for file systems. It uses the same interface to access different types of file systems, regardless of their location or protocol. The Flysystem module provides plugins for  thephpleague/flysystem  vendor package and implement FileSystem\u0027s plugin ...",t:"File System  "},"230":{i:0.00291364907445821,u:"../content/capabilities/development/file_system/filesystem-api.htm",a:" Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API  "},"231":{i:0.00484274448725677,u:"../content/capabilities/development/queue/queue.htm",a:" Concepts Sender\t -  a program that sends messages.\n Receiver\t- a program that waits to receive messages.\n Message - \ta string or binary data  passed from Sender to Receiver.\n Message Box\t- Similar to a Mailbox, here you can store, send and receive messages.\n Introduction\n The Queue module provides ...",t:"Queue    "},"232":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-adapter.htm",a:"Default Queue Adapter  Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter   "},"233":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-benefits.htm",a:" The following is a list of the Queus System’s benefits:\n \nAsynchronous: Message processing can be offloaded to different times to prevent bottlenecks and run when necessary.\n Decoupling: The queue provides separate layers for data and processing\n Scalability: Adding more processes for receiving and ...",t:"Queue Benefits   "},"234":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-engine.htm",a:"The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI for Demoshop: Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg Click ...",t:"Default Queue Engine"},"235":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-job-config.htm",a:" You can also find the Worker configuration in jobs.php as part of the Demopshop  and adjust the worker command to run every minute.\n\n To adjust the worker command to run every minute:\n \u003c?php\n\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027queue-worker-start\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console ...",t:"Queue Job Configuration  "},"236":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-msg-processor.htm",a:" Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin  "},"237":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-task.htm",a:" The Queue module provides a specific command for listening to the queues, fetching messages and triggering registered processors, by running this command you will see what messages are going to be consumed and passed to the plugins.\n\n The command syntax is as follows:\n\n ./vendor/bin/console ...",t:"Queue Task  "},"238":{i:0.00396205504973851,u:"../content/capabilities/development/queue/queue-workers.htm",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"239":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api.htm",a:" The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)    "},"240":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-additional-function.htm",a:" Meta Information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API    "},"241":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-appendix.htm",a:" API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security Recommendations\n Secure the API with a token ...",t:"Appendix - Zed API    "},"242":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-config.htm",a:" First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration    "},"243":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-crud-function.htm",a:" Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition Filtering\n For the ...",t:"CRUD Functionality - Zed API    "},"244":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-processor-stack.htm",a:" Request and Pre Processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API    "},"245":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-project-implementation.htm",a:" For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API    "},"246":{i:0.000560908467393122,u:"../content/capabilities/development/zed_api/zed-api-resources.htm",a:" Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources    "},"247":{i:0.0013743179382128,u:"../content/capabilities/development/console.htm",a:" With the Spryker Commerce OS comes an all-inclusive and fully pre-provisioned development environment on a virtual machine, based on Vagrant and VirtualBox. The command-line Console tool enables you to execute a great variety of commands, such as managing the Spryker Commerce OS installer, to run ...",t:"Console    "},"248":{i:0.000659157850425964,u:"../content/capabilities/development/cronjob-scheduling.htm",a:" To enable your system to process all requests effortlessly, the Spryker Commerce OS is equipped with a Cronjob Scheduling feature. All jobs can be scheduled and executed automatically or manually. Jobs are versioned and can easily be changed by your own developers. Spryker uses Jenkins for cronjob ...",t:"Cronjob Scheduling    "},"249":{i:0.000560908467393122,u:"../content/capabilities/development/data-feed.htm",a:" BETA version\n This (Undefined variable: General.bundle/module) is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed module help to query abstract products, categories, prices, availability data and related information for exporting or processing. The ...",t:"Data Feed Modules    "},"250":{i:0.000659157850425964,u:"../content/capabilities/development/development-tools.htm",a:" The Spryker Commerce OS provides your developers with a range of coding tools that make sure your OS run smoothly.\n   - Code sniffer: This will validate the code style\n   - Architecture sniffer: Checks whether the code follows the Spryker architecture\n  -  Code generator: Lets you generate modules ...",t:"Development Tools    "},"251":{i:0.000659157850425964,u:"../content/capabilities/development/devvm.htm",a:" With the Spryker Commerce OS comes an all-inclusive and fully pre-provisioned development environment on a virtual machine, based on Vagrant and VirtualBox.\nThe command-line Console tool enables you to execute a great variety of commands, such as managing the Spryker Commerce OS installer, to run ...",t:"DevVM (Development Virtual Machine)    "},"252":{i:0.000560908467393122,u:"../content/capabilities/development/dummy-payment.htm",a:" Do not use this code for production but you can use it as a starting point for new payment integrations. What is the DummyPayment for: it brings a simple state machine it shows how to integrate payment into the system it shows how to handle refunds it allows to test checkout process in several ways ...",t:"Dummy Payment    "},"253":{i:0.000560908467393122,u:"../content/capabilities/development/errorhandler.htm",a:" The Spryker Commerce OS uses a dedicated error handling mechanism to collect detailed error related information. The ErrorHandler handles notices, warnings and other types of minor issues usually not thrown as exceptions as strict as more serious errors. By default, they all throw meaningful ...",t:"ErrorHandler    "},"254":{i:0.00415193795974527,u:"../content/capabilities/development/flysystem.htm",a:" The Flysystem module integrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem    "},"255":{i:0.00089754454635491,u:"../content/capabilities/development/importer.htm",a:"Importer  Easily import your business logics and data, such as Product Information, Customer Base, Categories and many more into the Spryker Commerce OS.",t:"Importer    "},"256":{i:0.00373917499798292,u:"../content/capabilities/development/install-tool.htm",a:" Spryker offers an install tool which can be used to install the system as described in the install recipe file(s). Installation Install the module with composer by running the following command: \n        composer require spryker/install\n         After the installation you can run the command with ...",t:"Install Tool    "},"257":{i:0.000560908467393122,u:"../content/capabilities/development/installer.htm",a:" The Installer module is responsible of managing the installment process of required database data  in any environment. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Installer;\n\nuse ...",t:"Installer    "},"258":{i:0.000560908467393122,u:"../content/capabilities/development/logger.htm",a:" Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger    "},"259":{i:0.00189979269975752,u:"../content/capabilities/development/mg-availability.htm",a:" Upgrading from Version 5.* to Version 6.* \n         In Availability module version 6 we have added support for multi-store. Administrtion Interface has undergone some changes to allow selecting stores and update database tables to store relations to store. To upgrade, first you need to run database ...",t:"Migration Guide - Availability  "},"260":{i:0.00411817726202766,u:"../content/capabilities/development/mg-collector.htm",a:" Upgrading from Version 5.* to Version 6.* The general concept of collectors, and collector queries are enhanced to support multi-store. The following classes were altered to support the multi-store concept: AbstractCollector AbstractDatabaseCollector AbstractPdoCollector AbstractPropelCollector ...",t:"Migration Guide - Collector   "},"261":{i:0.000560908467393122,u:"../content/capabilities/development/mg-console.htm",a:" Upgrading from Version 3.* to Version 4.* \n            Console version 4 has been prepared for a standalone usage. Now you are able to use Console module\n            even without a DB configuration.\n         \n            Find or create ConsoleDependencyProvider in a project. Make sure it extends ...",t:"Migration Guide - Console  "},"262":{i:0.000560908467393122,u:"../content/capabilities/development/mg-environment-config.htm",a:" The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of the configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration  "},"263":{i:0.00107544514641991,u:"../content/capabilities/development/mg-rabbitmq.htm",a:" Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module  Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: bindingQueue ...",t:"Migration Guide - RabbitMQ  "},"264":{i:0.000560908467393122,u:"../content/capabilities/development/mg-setup.htm",a:" Upgrading from Version 3.* to Version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"265":{i:0.000560908467393122,u:"../content/capabilities/development/mg-stepengine.htm",a:" Upgrading from Version 2.* to Version 3.*\n \nIf you\u0027re migrating the StepEngine module from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine  "},"266":{i:0.00446836789744284,u:"../content/capabilities/development/mg-touch.htm",a:" Upgrading from Version 3.* to Version 4.* Update/install spryker/touch to at least 4.0.0 version. Install the new database columns by running vendor/bin/console propel:diff. Propel should generate a migration file with the changes. Run vendor/bin/console propel:migrate to apply the database ...",t:"Migration Guide - Touch    "},"267":{i:0.000560908467393122,u:"../content/capabilities/development/mg-transfer.htm",a:" Upgrading from Version 2.* to Version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer  "},"268":{i:0.000560908467393122,u:"../content/capabilities/development/modules.htm",a:" A module is a group of files (PHP classes, test classes, configuration files, CSS files, etc) that refer to one concept and it’s written in a way that it makes it usable by other modules. Modules can be logically divided into categories where some are mandatory and necessary for running the OS and ...",t:"Module Guide    "},"269":{i:0.000560908467393122,u:"../content/capabilities/development/sequence-number.htm",a:" \n    Sometimes it should be ensured for a project that the just generated number is not used for the same purpose twice.\n    Spryker provides Sequence Number module which handles the unique number generation.\n General Usage The sequence number facade contains ::generate() method which provides a ...",t:"Sequence Number    "},"270":{i:0.000560908467393122,u:"../content/capabilities/development/spryker-middleware.htm",a:"Overview Spryker Middleware is a constructor that allows you to set up a linear data processing flow, also referred to as pipeline, for import/export of data from some system to shop, or from shop to some system. For example, it can be used for importing products to a shop, or exporting orders from ...",t:"Spryker Middleware"},"271":{i:0.000560908467393122,u:"../content/capabilities/development/zed-request.htm",a:" This module is used to handle requests from Yves to Zed and the responses from Zed. Internally it makes use of the well known  Guzzle  library. HandlerStackContainer Guzzle provides a way to add a so called middleware. It makes use of a handler stack where you can push a middleware to. For more ...",t:"Zed Request  "},"272":{i:0.000577936088530904,u:"../content/capabilities/gift_cards/gift-cards.htm",a:"Gift Cards ",t:"Gift Cards "},"273":{i:0.00100807576115826,u:"../content/capabilities/gift_cards/enabling-gift-cards.htm",a:" The Gift Cards feature is shipped with the following modules: GiftCard: implements basic functionality of the Gift Cards feature as  well as the  Replacement value-checking strategy . GiftCardBalance: implements gift card  Balance value-checking strategy . GiftCardMailConnector: responsible for ...",t:"Enabling Gift Cards"},"274":{i:0.00105215538255733,u:"../content/capabilities/gift_cards/gift-card-purchase-management.htm",a:" The simple Gift Cards feature can help you increase website traffic, gain new customers and boost brand awareness. The purchase of a gift card generates an individual code that can then be used as a payment method during checkout. \nWhen paying with a gift card, customers are enabled to only use ...",t:"Gift Card Purchase and Management (Purchase, Redeem, Partial Redemption) "},"275":{i:0.00186494268922648,u:"../content/capabilities/gift_cards/gift-cards-purchase-redeeming.htm",a:" Gift Cards are sensible data and can be used to pay orders, therefore please keep in mind that they should be protected just like real money. This article describes general concepts of gift cards, their purchase and redeeming process as well as various use case scenarios. Introduction In the ...",t:"Gift Cards Purchase and Redeeming "},"276":{i:0.000577936088530904,u:"../content/capabilities/industry_partner_integrations/industry-partner-integrations.htm",a:"Industry Partner Integrations To speed up processes and simplify the daily management of your shop, you can integrate a great variety of third party solution providers such as shipping, payment and analytics.",t:"Industry Partner Integrations"},"277":{i:0.000577936088530904,u:"../content/capabilities/internationalization/internationalization.htm",a:"Internationalization ",t:"Internationalization  "},"278":{i:0.000560908467393122,u:"../content/capabilities/internationalization/glossary/glossary.htm",a:" In the Glossary you can easily store basic text information in different languages so your customers can switch to their preferred one. In the shop, all stored text keys will automatically be adjust, once language is switched. By default, languages are identified by a locale, e.g. de_DE meaning ...",t:"Glossary - Language Translation    "},"279":{i:0.000719832931345753,u:"../content/capabilities/internationalization/glossary/glossary-keys-use.htm",a:" One of the usages of the glossary keys in the Shopp Application is for rendering translated content. For allowing to render translated content, a dedicated extension for the twig template engine is available to be used. You can see bellow how you can add translated content in Yves  \u003cdiv ...",t:"Using Glossary Keys    "},"280":{i:0.000719832931345753,u:"../content/capabilities/internationalization/glossary/glossary-keys.htm",a:" Glossary keys present two layers of persistence: SQL database storage in-memory key-value storage (Redis) In this section we’ll exemplify the usage of the functionality for managing the glossary keys from the backoffice user interface and the usage of them for the Yves interface through twig ...",t:"Managing Glossary Keys    "},"281":{i:0.000719832931345753,u:"../content/capabilities/internationalization/glossary/glossary-how-translations-managed.htm",a:" The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed - Glossary    "},"282":{i:0.00920951793619966,u:"../content/capabilities/internationalization/currency.htm",a:" \nThe Currency module provides an easy way to retrieve information about a currency given as an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by its ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency    "},"283":{i:0.000560908467393122,u:"../content/capabilities/internationalization/ht-setup-stores-multiple-locals.htm",a:" Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration here.\n\n For each ...",t:"HowTo - Setup Stores with Multiple Locales    "},"284":{i:0.000724657439114525,u:"../content/capabilities/internationalization/international-tax-rates-sets.htm",a:"International Tax Rates and Sets  Align your business with international tax standards by defining tax rates and sets. Determine country-based tax rates for products, options and shipments, that will automatically be applied to the respective shops.",t:"International Tax Rates and Sets    "},"285":{i:0.00570074162308845,u:"../content/capabilities/internationalization/mg-currency.htm",a:" Upgrading from Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency    "},"286":{i:0.0061973618070466,u:"../content/capabilities/internationalization/mg-multi-currency.htm",a:"Migration Guide - Multi-Currency  Migrating System to Multi-Currency \n          This article provides a whole overview of what needs to be done to have the multi-currency feature running in your Spryker shop. The multi-currency feature affects many Spryker modules so we split it into smaller parts.\n ...",t:"Migration Guide - Multi Currency"},"287":{i:0.000724657439114525,u:"../content/capabilities/internationalization/multiple-currencies-per-store.htm",a:" The Spryker Commerce OS lets you to define multiple currencies per store for product, product option and shipping method. \nA product can for example cost 5 EUR in Germany, 6 EUR in France and 5 CHF in Switzerland. \nYour customers may easily choose between these different currencies. All prices on ...",t:"Multiple Currencies per Store    "},"288":{i:0.000724657439114525,u:"../content/capabilities/internationalization/multiple-stores.htm",a:" With the Spryker Commerce OS you can freely create Multiple Stores for different scenarios that suit your business needs. Build one Store that services multiple countries and languages or setup a different store for each region. Easily share abstract products, discounts and other logics and code ...",t:"Multiple Stores    "},"289":{i:0.000577936088530904,u:"../content/capabilities/inventory_management/inventory-management.htm",a:"Inventory Management ",t:"Inventory Management    "},"290":{i:0.00315024419564054,u:"../content/capabilities/inventory_management/about-inventory.htm",a:" Inventory is the amount of products you offer to your customers. These products are catalogued and divided into items that are in stock and reserved. The stock value is the physical amount of products you have in your warehouse, whereas availability is an aggregated value per store which reflects ...",t:"Inventory    "},});