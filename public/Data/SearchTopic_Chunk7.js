define({"509":{i:0.000721035684033252,u:"../content/capabilities/wishlist/convert-wishlist-cart.htm",a:"Convert Wishlist to Cart  The direct-to-cart function enables your customers to simply add items from their Wish List to the Shopping Cart with a single click.\n",t:"Convert Wishlist to Cart "},"510":{i:0.000885696765697733,u:"../content/capabilities/wishlist/mg-wishlist.htm",a:" Upgrading from Version 5.* to Version 6.* With the implementation of the quote storage strategies, the new version 5.0.0 of the Cart module has been released. The Wishlist module is dependent on it, so make sure your Cart module\u0027s version is 5.0.0 or higher. CartClientInterface::storeQuote is ...",t:"Migration Guide - Wishlist "},"511":{i:0.000721035684033252,u:"../content/capabilities/wishlist/multiple-wishlists.htm",a:"Multiple Wishlists  Help your customers track and save items for later purchase through multiple Wish Lists, which are connected to the users\u0027 accounts.\n Customers can create one or multiple wishlists, add products to them and transfer wishlists to carts. - Multiple named wishlists per customer",t:"Multiple Wishlists "},"512":{i:0.000721035684033252,u:"../content/capabilities/wishlist/named-wishlists.htm",a:"Named Wishlists  Users can easily keep track of their Wish Lists by naming each one individually.\n",t:"Named Wishlists "},"513":{i:0.000558105099395669,u:"../content/capabilities/wishlist/wishlist-items-mgmt.htm",a:" addItem(WishlistItemTransfer $wishlistItemTransfer) Adds item to wishlist. Required values: fkCustomer, fkProduct. Optional: wishlistName. In case wishlist name is not provided the default value will be used. \u003c?php\n$wishlistItemTransfer = (new WishlistItemTransfer())\n    ...",t:"Wishlist Items Management "},"514":{i:0.000558105099395669,u:"../content/capabilities/wishlist/wishlist-management.htm",a:" createWishlist(WishlistTransfer $wishlistTransfer) Creates wishlist for a specific customer with given name. Required values: name, fkCustomer. \u003c?php\n$wishlistTransfer = (new WishlistTransfer())\n    -\u003esetName(\u0027foobar\u0027)\n    -\u003esetFkCustomer(1);\n\n$wishlistTransfer = ...",t:"Wishlist "},"515":{i:0.000558105099395669,u:"../content/capabilities/wishlist/wishlist-schema.htm",a:"Wishlist Schema  As is the concept of the wishlist, the schema is also very straightforward. A customer can have multiple wishlists, which can have multiple items.",t:"Wishlist Schema "},"516":{i:0.000558105099395669,u:"../content/administration_interface_guide/about-admin-interface.htm",a:"A Spryker-based shop ships with a comprehensive, intuitive administration area comprised of numerous features that give you a strong hold over the customization of your store. Here you can tailor features to your specific needs, manage orders, products, customers, modify look \u0026 feel of your shop and ...",t:"About the Administration Interface Guide"},"517":{i:0.000601231514398266,u:"../content/administration_interface_guide/sales/sales.htm",a:"Understanding how sales orders work is an important part of running your shop, as your entire business depends on how efficiently you can manage the orders that customers make in your shop. Probably most of your time administering the shop in the Administration Interface will be spent in the Sales ...",t:"Sales"},"518":{i:0.0024976087505255,u:"../content/administration_interface_guide/sales/manual-order-entry.htm",a:"To open this page, go to Sales -\u003e Manual Order Entry This page is where you can enter orders manually. You generally need to do this when customers want to make an order but can not do it for some reason, or when preparing offers for customers, or when you are taking orders while on the phone or ...",t:"Manual Order Entry"},"519":{i:0.0024976087505255,u:"../content/administration_interface_guide/sales/relcalmations.htm",a:"To open this page, go to Sales -\u003e Reclamations. This page is where you can manage all order claims made by your customers. For example, sometimes your customers might want a replacement for their order, or refund, and in order not to become entangled in all such request, you need a generic price to ...",t:"Reclamations"},"520":{i:0.0024976087505255,u:"../content/administration_interface_guide/sales/orders.htm",a:"To open this page, go to Sales -\u003e Orders. When a customer buys something from your online store, the information on their order is automatically transferred to this page. Here you can manage all orders created by your customers.  Specifically, from this page you can: Manage the orders list View and ...",t:"Orders"},"521":{i:0.000601231514398266,u:"../content/administration_interface_guide/customers/customer.htm",a:"Managing your customers effectively is an important part of your e-commerce business. The whole customers management is done through the Customers menu in the Administration Interface, which is divided into two section:  Customers  and Customer Groups.  Customers  is the area where all the data of ...",t:"Customers"},"522":{i:0.0142025841896577,u:"../content/administration_interface_guide/customers/customers.htm",a:"Customer data can be managed either by the shop owner from the Administrator Interface, or by the customer from the shop interface. When managing customer data from the Administration Interface, you can add personal information like name and email address, as well as customer billing and shipping ...",t:"Customers"},"523":{i:0.00400797148886451,u:"../content/administration_interface_guide/category.htm",a:"To open this page, go to Category. Managing volumes of products requires that you be able to group together items under specific criteria. With Categories, you can group and build hierarchies of products by category. This is how we create a structure to display products by, for example, Electronics. ...",t:"Category"},"524":{i:0.000601231514398266,u:"../content/administration_interface_guide/content_management/cms.htm",a:"There is a dedicated section that enables you to create pages, blocks, as well as configure URL redirects. Both pages and blocks use Twig templates that must be already created. To find out more on how to use the Content Management System, please follow the following sections: CMS Block   Pages ...",t:"Content Management System"},"525":{i:0.00072845447830692,u:"../content/administration_interface_guide/content_management/blocks.htm",a:" How to Use Blocks \n        Blocks can be viewed as partial content snippets that can be embedded in other pages. From an SEO perspective\n        blocks are a real advantage.         \n        The CMS Block module supports flexible extension by adding a new connector.  Spryker provides two ...",t:"CMS Block  "},"526":{i:0.00072845447830692,u:"../content/administration_interface_guide/content_management/pages.htm",a:"Pages In Pages section you can create new CMS pages, publish, view, edit them as well as manage all their changes with the versioning functionality. CMS - Creating a New Page To demonstrate how to add a new page in Yves using the CMS, we will create a page with contact information in the demo shop. ...",t:"CMS - Pages"},"527":{i:0.00072845447830692,u:"../content/administration_interface_guide/content_management/redirects.htm",a:"URL redirects can be configured from the CMS interface. You must specify the URL you need to redirect, the new URL and the status code which plays a major role for search engines.   See also: CMS - Creating a New Page CMS - Preview Draft Page CMS Block CMS Glossary  CMS Versioning CMS   Last review ...",t:"Redirects"},"528":{i:0.000601231514398266,u:"../content/administration_interface_guide/glossary/glossary.htm",a:"The translations can be handled from the back-office application from the Glossary section. A glossary consists of a glossary key (which is used in the templates contained in the shop application) a glossary value for each locale defined in the shop. Example: \t\tNext, we will help you create this ...",t:"Glossary"},"529":{i:0.000601231514398266,u:"../content/administration_interface_guide/search_and_filters/search-and-filters.htm",a:"Having a well-thought-out product search is a huge opportunity to provide an amazing shopping experience. It is one of the primary ways you can help customers find what they’re looking for. In our Zed Admin UI we have features that enable you to control search and filtering preferences and customize ...",t:"Search and Filters"},"530":{i:0.00372048262307544,u:"../content/administration_interface_guide/search_and_filters/category-filters.htm",a:"An essential part of organizing products in a store is to arrange items into categories. Category Filters allow you to refine and customize the way filters are listed when you search by category. With Category Filters you can improve and optimize how visitors to the store locate products. When a ...",t:"Category Filters"},"531":{i:0.00372048262307544,u:"../content/administration_interface_guide/search_and_filters/search-preferences.htm",a:" To open this page, go to Search and Filters -\u003e Search Preferences. This page is where you can customize search by product attributes in your online shop. From this page you can: Add a new attribute to search Include attributes for full text search Include attributes for full text boosted Include ...",t:"Search Preferences "},"532":{i:0.00400797148886451,u:"../content/administration_interface_guide/discount.htm",a:"To access this page, go to Discount. At this place, you can define discounts for products. The discounts can either be cart-based, or they can be in form of vouchers. The cart-based discounts allow you to create special rules and apply them to cart content. For example, giving a discount for ...",t:"Discount"},"533":{i:0.00400797148886451,u:"../content/administration_interface_guide/navigation.htm",a:"To open this page, go to Navigation. Spryker\u0027s Navigation allows to create complex navigation elements with cms pages, categories, and any other relevant links. You can even group certain items together into secondary menus and customise their look and feel. With the Navigation you can build and ...",t:"Navigation"},"534":{i:0.000601231514398266,u:"../content/administration_interface_guide/shipment.htm",a:"The carrier companies that you want to have integrated in the shop can be configured from the Zed Admin UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: ...",t:"Shipment"},"535":{i:0.000601231514398266,u:"../content/administration_interface_guide/users_control/users-control.htm",a:"Users Control Delete this text and replace it with your own content.",t:"Users Control"},"536":{i:0.000558105099395669,u:"../content/administration_interface_guide/users_control/groups.htm",a:"groups Delete this text and replace it with your own content.",t:"groups"},"537":{i:0.000558105099395669,u:"../content/administration_interface_guide/users_control/roles.htm",a:"roles Delete this text and replace it with your own content.",t:"roles"},"538":{i:0.000558105099395669,u:"../content/administration_interface_guide/users_control/user.htm",a:"user Delete this text and replace it with your own content.",t:"user"},"539":{i:0.000558105099395669,u:"../content/administration_interface_guide/company_account/company-account.htm",a:"Company Account Delete this text and replace it with your own content.",t:"Company Account"},"540":{i:0.000558105099395669,u:"../content/administration_interface_guide/company_account/companies.htm",a:"Companies Delete this text and replace it with your own content.",t:"Companies"},"541":{i:0.000558105099395669,u:"../content/administration_interface_guide/company_account/company-unit-addresses.htm",a:"company-unit-addresses Delete this text and replace it with your own content.",t:"company-unit-addresses"},"542":{i:0.000558105099395669,u:"../content/administration_interface_guide/company_account/company-units.htm",a:"company-units Delete this text and replace it with your own content.",t:"company-units"},"543":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/api.htm",a:"Api Delete this text and replace it with your own content.",t:"Api"},"544":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/architecture-sniffer.htm",a:"Architecture Sniffer Delete this text and replace it with your own content.",t:"Architecture Sniffer"},"545":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/dependencies.htm",a:"Dependencies Delete this text and replace it with your own content.",t:"Dependencies"},"546":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/oms.htm",a:"OMS Delete this text and replace it with your own content.",t:"OMS"},"547":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/php-info.htm",a:"PHP Info Delete this text and replace it with your own content.",t:"PHP Info"},"548":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/queue-processes.htm",a:"Queue Processes Delete this text and replace it with your own content.",t:"Queue Processes"},"549":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/search.htm",a:"Search Delete this text and replace it with your own content.",t:"Search"},"550":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/stability.htm",a:"Stability Delete this text and replace it with your own content.",t:"Stability"},"551":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/state_machine.htm",a:"State machine Delete this text and replace it with your own content.",t:"State machine"},"552":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/storage.htm",a:"Storage Delete this text and replace it with your own content.",t:"Storage"},"553":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/sync-permissions.htm",a:"Sync permissions Delete this text and replace it with your own content.",t:"Sync permissions"},"554":{i:0.000558105099395669,u:"../content/administration_interface_guide/maintenance/system-info.htm",a:"System Info Delete this text and replace it with your own content.",t:"System Info"},"555":{i:0.000601231514398266,u:"../content/administration_interface_guide/merchants/merchant.htm",a:"B2B commerce is all about commerce transactions between businesses or companies who market their goods or services to other companies. In the B2B partnership, which is usually based on contracts, the selling company is also referred to as merchant and the buyer is often represented by a business ...",t:"Merchants"},"556":{i:0.00141501087913198,u:"../content/administration_interface_guide/merchants/merchant-relations.htm",a:"To open this page, go to Merchants -\u003e Merchant Relations This page is where you can add and manage merchant relations, i.e. relations between seller and buyer. From this page you can: Create merchant relations Edit merchant relations Delete merchant relations Graphic User Interface The Merchants ...",t:"Merchant Relations"},"557":{i:0.00141501087913198,u:"../content/administration_interface_guide/merchants/merchants.htm",a:"To open this page, go to Merchants -\u003e Merchants This page is where you can add and manage merchants. Merchants are actually sellers usually represented by a company. From this page you can: Create merchants Edit merchants Delete merchants Graphic User Interface The Merchants page consists of the ...",t:"Merchants"},"558":{i:0.000558105099395669,u:"../content/front-end_developer_guide/user-interface-guide.htm",a:"In this section, you will find an introduction about how to build the UI for your project, when working with Spryker. The documents under this section will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application. Academy Navigation To ...",t:"User Interface Guide"},"559":{i:0.000558105099395669,u:"../content/front-end_developer_guide/atomic_frontend/overview.htm",a:" In this page: To provide each customer with exactly the features they require, Spryker Commerce OS has been\n    split into modules. Each customer can have a unique set of modules, and even module versions,\n    specific to their business requirements. This fact combined with the possibility for ...",t:"Atomic Frontend   "},"560":{i:0.000558105099395669,u:"../content/front-end_developer_guide/demoshop/overview.htm",a:"Demoshop  TODO:",t:"Demoshop "},"561":{i:0.00870019488622778,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/overview.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Antelope is an  npm  global command line tool based upon  webpack  module bundler, designed to  build  the assets and  publish  ...",t:"Antelope Overview "},"562":{i:0.00377852949626455,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/asset-management-overview.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview "},"563":{i:0.00370594832469124,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/build-optimization-antelope.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. We use Antelope for transpiling/building the assets and to optimize the resulting output.\n \nRead more about  antelope configuration ...",t:"Build and Optimization for Antelope "},"564":{i:0.00409970074913867,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/cli.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. Antelope is a command line interface tool available and ready for use from your terminal/console .\n\n Before you proceed with setup, ...",t:"CLI "},"565":{i:0.00409970074913867,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/configuration.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. A configuration file is a set of properties and methods that define how to process assets.\n\n Read more about  asset build and ...",t:"Configuration "},"566":{i:0.00365578870472358,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/development-antelope.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n ...",t:"Development with Antelope "},"567":{i:0.00330467136494989,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/download-structure-antelope.htm",a:"Download and Structure (Antelope)  Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Here you will find out how to download external dependencies and where to place them, together with ...",t:"Download and Structure - Antelope"},"568":{i:0.00409970074913867,u:"../content/front-end_developer_guide/demoshop/antelope_global_tool/publishing.htm",a:" Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. To publish assets means to place them (or the build output files) in a place where they can be accessed and loaded by the browser.\n ...",t:"Publishing "},"569":{i:0.000558105099395669,u:"../content/front-end_developer_guide/demoshop/frontend/frontend-overview.htm",a:" To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview "},"570":{i:0.000652983212401383,u:"../content/front-end_developer_guide/demoshop/frontend/build-optimization.htm",a:"Build and Optimization  We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend ...",t:"Build Optimization"},"571":{i:0.000652983212401383,u:"../content/front-end_developer_guide/demoshop/frontend/demoshop-guide.htm",a:" Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide "},"572":{i:0.0009741544652755,u:"../content/front-end_developer_guide/demoshop/frontend/development.htm",a:" Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n ...",t:"Development "},"573":{i:0.00236754150734256,u:"../content/front-end_developer_guide/demoshop/frontend/download-structure.htm",a:" Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure "},"574":{i:0.000652983212401383,u:"../content/front-end_developer_guide/demoshop/frontend/public-folder.htm",a:" To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder "},"575":{i:0.00538866855702131,u:"../content/front-end_developer_guide/demoshop/oryx/oryx.htm",a:"  As of April 2017, Oryx replaces  Antelope Introduction\n Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED ...",t:"Oryx "},"576":{i:0.00543611784787476,u:"../content/front-end_developer_guide/demoshop/oryx/oryx-for-zed.htm",a:"  As of April 2017, Oryx replaces  Antelope Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n ...",t:"Oryx for Zed "},"577":{i:0.000558105099395669,u:"../content/front-end_developer_guide/demoshop/twig_templates/twig-overview.htm",a:" Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n \nYou can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig "},"578":{i:0.000558105099395669,u:"../content/industry_partners/partner-integration.htm",a:"Industry Partner Integration  In this section you will find information about our Industry Partner Integration solutions. Please visit our Partners Registry for a complete list of our partners  https://spryker.com/find-a-partner/(missing or bad snippet)",t:"Industry Partner Integration    "},"579":{i:0.000574463394741482,u:"../content/industry_partners/hosting/claranet.htm",a:"Hosting Provider - Claranet  Partner Information   Copyright and Disclaimer See  Disclaimer . See also: Managed Services for eCommerce 2.0   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Claranet "},"580":{i:0.000574463394741482,u:"../content/industry_partners/hosting/continum.htm",a:"Hosting Provider - Continum  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Continum "},"581":{i:0.000574463394741482,u:"../content/industry_partners/hosting/metaways.htm",a:"Hosting Provider - Metaways  Partner Information Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - Metaways"},"582":{i:0.000574463394741482,u:"../content/industry_partners/hosting/plusserver.htm",a:"Hosting Provider - PlusServer  Partner Information Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Hosting Provider - PlusServer"},"583":{i:0.000574463394741482,u:"../content/industry_partners/payment/afterpay.htm",a:"Payment Integration - AfterPay  Partner Information   Copyright and Disclaimer See  Disclaimer .   Last review date: Jul. 6th, 2018 ",t:"Payment Integration - AfterPay  "},"584":{i:0.000574463394741482,u:"../content/industry_partners/payment/amazonpay/amazon-pay.htm",a:" Partner Information Amazon pay consists of client-side tools (widget, javascript etc.) and Amazon API with SDKs written for different\n            programming languages (PHP, Python, Ruby, Java, C#). Client-side tools are used for displaying GUI elements on some common pages of an internet shop, and ...",t:"Payment Integration - Amazon Pay"},"585":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-api.htm",a:" So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay - API"},"586":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-configuration.htm",a:" \n            Please refer to config/Shared/config.dist.php for example of module configuration.\n         To setup the Amazon Pay initial configuration, use the credentials you received after registering as an Amazon seller: \n$config[AmazonPayConstants::CLIENT_ID] = ...",t:"Amazon Pay - Configuration  "},"587":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-email-notification.htm",a:" Since Amazon Pay requires some emails being sent in specific situations, please implement on a project level following authorization status update logic. UpdateOrderAuthorizationStatusTransaction Once the order authorization state is Suspended, the customer should receive an email stating that the ...",t:"Amazon Pay - Email Notifications  "},"588":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-order-ref-info.htm",a:"Amazon Pay - Order Reference and Information about Shipping Addresses  After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about ...",t:"Amazon Pay - Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"589":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-refund.htm",a:" After successful authorization and capture processes order should be closed. This blocks any modifications to\n            an order. From this state only Refund operation is possible. Refund can be partial if more than one item is\n            set to refund or full. Amazon only requires the amount of ...",t:"Amazon Pay - Refund  "},"590":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-rendering-pay.htm",a:" Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Amazon Pay - Rendering a \"Pay with Amazon\" Button on the Cart Page"},"591":{i:0.000558105099395669,u:"../content/industry_partners/payment/amazonpay/amazon-pay-simulations.htm",a:" In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with red star on payment widget. It allows to reproduce different cases of \"decline\" payment workflow. But there are more edge cases like expired ...",t:"Amazon Pay - Sandbox Simulations"},});