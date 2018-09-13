define({"364":{i:0.000560908467393122,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-implement-prepayment.htm",a:" Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment   "},"365":{i:0.000656263145764701,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-be.htm",a:" To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End   "},"366":{i:0.000656263145764701,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-checkout.htm",a:" The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo — Integrate Prepayment into Checkout   "},"367":{i:0.000656263145764701,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-fe.htm",a:" Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End   "},"368":{i:0.000656263145764701,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-shared.htm",a:" As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared   "},"369":{i:0.000656263145764701,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-test.htm",a:"HowTo - Test Prepayment Implementation  Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation   "},"370":{i:0.00125134919048502,u:"../content/capabilities/payment/mg-payment.htm",a:" Upgrading from Version 3.* to Version 4.*\n In the  Payment  module version 4 we have added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer ...",t:"Migration Guide - Payment    "},"371":{i:0.000724657439114525,u:"../content/capabilities/payment/multiple-payment-per-order.htm",a:" All orders can be paid with none, one or multiple payment methods which the customer can select during checkout. To accommodate your customer\u0027s requirements, you can offer multiple payment methods for a single order, such as gift card and an additional credit card.\n Most orders are paid with a ...",t:"Multiple Payment Methods Per Order    "},"372":{i:0.00162455958120505,u:"../content/capabilities/payment/payment-functionality.htm",a:" \nMultiple Payments\n Spryker enables to have multiple payments per checkout, payments are stored in QuoteTransfer::payments and persisted when CheckoutClient::placeOrder is called in last checkout step. \nEach payment method must provide payment amount it shares from order grand total. This amount is ...",t:"Payment Functionality    "},"373":{i:0.000724657439114525,u:"../content/capabilities/payment/payment-provider-integration.htm",a:" The Spryker Commerce OS offers integrations with several payment providers that can be used in the checkout and order management. Easily define the availability of a provider based on customer preferences and local regulations and specify the order the providers are displayed in during checkout.\n",t:"Payment Provider Integration    "},"374":{i:0.000724657439114525,u:"../content/capabilities/payment/refund-management.htm",a:" Refunds can be handled automatically in the Administration Interface, once the order has been delivered. Your customers can return the entire order or parts thereof by means of the order splitting mechanism. Every order contains information on the total possible refund value and how much has ...",t:"Refund Management    "},"375":{i:0.000577936088530904,u:"../content/capabilities/price/price.htm",a:"Price ",t:"Price    "},"376":{i:0.000659157850425964,u:"../content/capabilities/price/auto-detect-currency.htm",a:"Auto-Detect Currency The Spryker Commerce OS automatically registers the store\u0027s currency your customer selects and manages orders accordingly. Prices, Payment and Shipping costs are all converted automatically.",t:"Auto-Detect Currency"},"377":{i:0.000560908467393122,u:"../content/capabilities/price/ht-create-personalized-prices.htm",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"378":{i:0.000659157850425964,u:"../content/capabilities/price/measurement-units.htm",a:"ML MS MC Depending on your type of business you may not need to sell your products in quantities, but in length, weight or volume. The Spryker Commerce OS allows you to offer your products in a variety of different measuring units.\nYou can separate internal and external selling units to efficiently ...",t:"Measurement Units"},"379":{i:0.000890145400394924,u:"../content/capabilities/price/mg-price-cart-connector.htm",a:"Upgrading from Version 3.* to Version 4.* \n            In version 4 we have added support for multi-currency. First of all make sure you  have migrated the Price module . \n\n            We have changed the way the default price type is assigned, it\u0027s not coming from the new price module, also the ...",t:"Migration Guide - Price Cart Connector"},"380":{i:0.00562510524888358,u:"../content/capabilities/price/mg-price.htm",a:"Upgrading from Version 4.* to Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"381":{i:0.00447534759619409,u:"../content/capabilities/price/money.htm",a:"Money Handling monetary values can be a problem and is often quite hard. The Money bundle makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money"},"382":{i:0.000659157850425964,u:"../content/capabilities/price/net-gross-price.htm",a:"MC\n You can easily manage gross and net prices per product, country, currency or anything else and define which price you want to display in the shop.\nIn turn, your customers can choose their preferred currency when visiting your store.\n - Customers can switch between gross and net mode in the shop ...",t:"Net and Gross Prices"},"383":{i:0.000560908467393122,u:"../content/capabilities/price/packaging-units.htm",a:"ML MS MC Offer cost-efficient and flexible Packaging Units that suit the needs of the product and your customers, such as bags, palettes, or packets in addition to single item packaging. The units can either contain a fixed or variable pre-specified quantity of items. Variable packaging units allow ...",t:"Packaging Units"},"384":{i:0.000560908467393122,u:"../content/capabilities/price/price-functionality.htm",a:"A price can be attached to an abstract product as well as to a concrete product. The price is stored as an integer, in the smallest unit of the currency (e.g. for Euro that would be cents). Each price is assigned to a price type ( e.g. gross price, net price ) and for a price type there can be one ...",t:"Price Functionality"},"385":{i:0.000659157850425964,u:"../content/capabilities/price/price-types.htm",a:"Price Per Business Unit Offer your customers individual agreements and customize the Prices per Business Unit accordingly. The Spryker Commerce OS allows you to display different prices in your web shop. To avoid unnecessary repetition of values, the data is compressed in the database. You can also ...",t:"Price Types"},"386":{i:0.000659157850425964,u:"../content/capabilities/price/volume-prices.htm",a:" In B2B business model every shop owner aims to explore new markets, experience significant growth, have more orders on the website and, thus, increase the sales. For some store owners that means working hard and spending more money. A better option is to get your customers to checkout with more ...",t:"Volume Prices  "},"387":{i:0.000577936088530904,u:"../content/capabilities/product_management/product-management.htm",a:"Product Management",t:"Product Management"},"388":{i:0.00291957158489967,u:"../content/capabilities/product_management/category/category.htm",a:"The mechanisms that make finding a product easier are the most important features in a commerce business. If it\u0027s difficult for a customer to find the product that he needs, then he won\u0027t buy it even if that product is available in the shop. One of the features is organizing the products into ...",t:"Category"},"389":{i:0.00150874536488883,u:"../content/capabilities/product_management/category/category-filter-feature-integration.htm",a:"Prerequisites To prepare your project to work with the Category Filters: Require the Category Filters modules in your composer by running\n         composer require spryker/product-category-filter composer require spryker/product-category-filter-collector composer require ...",t:"Feature Integration - Category Filters"},"390":{i:0.00141586749225705,u:"../content/capabilities/product_management/category/category-filter-under-the-hood.htm",a:"Database Schema The ProductCategoryFilter module adds a new table: spy_product_category_filter. The table stores the filter data per category in JSON format.   See also: Category Category Filters Feature Integration - Category Filters           Last\nreview date: Dec. 1st, 2017 ",t:"Under the Hood - Category Filters"},"391":{i:0.00150874536488883,u:"../content/capabilities/product_management/category/category-filter.htm",a:"Category filters is a feature that provides full control over filters displayed in the catalog page. It allows reordering and removing of specific search filters from Yves based on some configuration per product category. This feature is especially useful in cases when a category has a lot of ...",t:"Category Filters"},"392":{i:0.000560908467393122,u:"../content/capabilities/product_management/category/category-module-overview.htm",a:"Categories are modeled in an hierarchical structure, a tree. For this, the category node entity was introduced - it links a category to its parent category. A category can be assigned to multiple category nodes. Category nodes have the following concerns: Structure of the category nodes Mapping of ...",t:"Category Module Overview"},"393":{i:0.000560908467393122,u:"../content/capabilities/product_management/product/product.htm",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that control behavior of the shop. For example the color of a product is an important information that the customer might need, whereas the weight of the product can be used to ...",t:"Product"},"394":{i:0.000640370699369438,u:"../content/capabilities/product_management/product/product-attributes.htm",a:"One way to describe a characteristic of a product is the attribute mechanism. It allows to store a list of key value pairs. There are 4 possible locations where attributes can be stored. Common attributes to all variant are stored on the level of the abstract product. However if they contain ...",t:"Product Attributes"},"395":{i:0.000640370699369438,u:"../content/capabilities/product_management/product/product-bundles.htm",a:"A bundle represents two or more products, sold as a set; it is a distinct product that incorporates other concrete products. Example: Bundles are handled in different ways: For example, a marketing bundle of two items that gives a 20% discount is purchased as a single item and then split for ...",t:"Product Bundles"},"396":{i:0.000640370699369438,u:"../content/capabilities/product_management/product/product-define-variants.htm",a:"\n            Spryker’s data structure for products allows to design a product hierarchy.\n            The abstract product does not have stock, but defines various default properties for the descendant concrete products (product variants).\n            The concrete product (product variant) always ...",t:"Defining Variants with Abstract and Concrete Products"},"397":{i:0.000640370699369438,u:"../content/capabilities/product_management/product/product-domain-model.htm",a:"The following domain model shows abstract product and concrete product. One abstract product has at least one up to n different products. A product belongs exactly to one abstract product. Both abstract and concrete product can have 0 to n product attributes. Remember a product attribute table ...",t:"Product Domain Model"},"398":{i:0.000640370699369438,u:"../content/capabilities/product_management/product/product-lifecycle.htm",a:"The touch tables are able create the snapshot of what’s currently loaded into the Yves data storages ( both key-value and search data storages) If a product was added into the Zed database after the last export, then there’s no corresponding entry in the touch table for that product. Once it’s ...",t:"Product Lifecycle"},"399":{i:0.00101598667349938,u:"../content/capabilities/product_management/product/product-options-1.htm",a:"\n            Product options allow to configure a product further. You can define option types and each option type can have 1 to n option values.\n            Each option value has an associated price.\n             Example \n                    You want to sell a piece of artwork as a product ...",t:"Product Options - Version 1"},"400":{i:0.000560908467393122,u:"../content/capabilities/product_management/product_group/product-group.htm",a:"The Product Groups feature allows to group together multiple abstract products for various reasons. One of the most common use cases of this feature is to group same products with different colors together to make user’s browsing more convenient. Once products are grouped together, on catalog and ...",t:"Product Group"},"401":{i:0.000799295163322069,u:"../content/capabilities/product_management/product_group/product-group-feature-integration.htm",a:"Prerequisites To prepare your project to work with Product groups: Require the Product Group bundles in your composer.json by running composer require spryker/product-group spryker/product-group-collector. Install the new database tables. By running vendor/bin/console propel:diff. Propel should ...",t:"Feature Integration - Product Group"},"402":{i:0.000799295163322069,u:"../content/capabilities/product_management/product_group/product-group-under-the-hood.htm",a:"Database Schema The ProductGroup (Undefined variable: General.bundle/module) provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a ...",t:"Under The Hood"},"403":{i:0.00373917499798292,u:"../content/capabilities/product_management/product_label/product-label-1-0.htm",a:"The latest version of this (Undefined variable: General.bundle/module) can be found here  Product Label Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in ...",t:"Product Label 1.0"},"404":{i:0.000560908467393122,u:"../content/capabilities/product_management/product_relation/product-relation.htm",a:"E-Commerce shops maximize value for their shop visitors by helping them explore products that are related to the one they are currently interested in. These relations appear in different ways such as displaying similar products, upgrades of products (Product-relations), or simply products that fit ...",t:"Product Relation"},"405":{i:0.000640370699369438,u:"../content/capabilities/product_management/product_relation/product-relation-building-your-own.htm",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type"},"406":{i:0.000640370699369438,u:"../content/capabilities/product_management/product_relation/product-relation-db-entity-relation.htm",a:"spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product"},"407":{i:0.000640370699369438,u:"../content/capabilities/product_management/product_relation/product-relation-integration.htm",a:"Register a new collector plugin. How to is in  Yves Datastore Collector - Product Relation .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\ProductRelationTwigServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This ...",t:"Product Relation Integration"},"408":{i:0.000640370699369438,u:"../content/capabilities/product_management/product_relation/product-relation-query-builder.htm",a:"Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation"},"409":{i:0.000640370699369438,u:"../content/capabilities/product_management/product_relation/product-relation-types.htm",a:"In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids or ...",t:"Product Relation Types"},"410":{i:0.00118468719999013,u:"../content/capabilities/product_management/product_relation/product-relation-yves-datatastore.htm",a:"The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector (Undefined variable: General.bundle/module).\n \nInclude this (Undefined variable: General.bundle/module) in your composer.json file and update. Then add the plugin ...",t:"Yves Datastore Collector - Product Relation"},"411":{i:0.000560908467393122,u:"../content/capabilities/product_management/product_reviews/product-review.htm",a:"\n            The Product Reviews feature allows customers to add reviews and ratings to abstract products.\n            A dedicated Zed Admin UI allows reviews and ratings to be supervised.\n            Rating information can be used for sorting and filtering products.\n            Product ratings and ...",t:"Product Reviews"},"412":{i:0.00125818987035969,u:"../content/capabilities/product_management/product_reviews/product-review-feature-configuration.htm",a:"Configuring the Maximum Rating To change the maximum allowed rating, alter the Client configuration by extending the \\Spryker\\Client\\ProductReview\\ProductReviewConfig class in your project directory. Override getMaximumRating method to return the desired selectable maximum rating value. \n        ...",t:"Feature Configuration - Product Reviews"},"413":{i:0.000680101815357595,u:"../content/capabilities/product_management/product_reviews/product-review-feature-integration.htm",a:"Prerequisites To prepare your project to work with Product Reviews: Require the Product Review modules in your composer by running\n             composer require spryker/product-review composer require spryker/product-review-collector composer require spryker/product-review-gui Install the new ...",t:"Feature Integration - Product Reviews"},"414":{i:0.000680101815357595,u:"../content/capabilities/product_management/product_reviews/product-review-filter-and-sort.htm",a:"Prerequisites \n                Configure your product collector query which provides the product data for your product page map and add the required average rating value.\n             \n                Amend product page map to make it possible to filter and sort by rating value. Normalize the rating ...",t:"Filter \u0026 Sort by Average Rating - Product Reviews"},"415":{i:0.00453374163063037,u:"../content/capabilities/product_management/product_reviews/product-review-under-the-hood.htm",a:"Database Schema The Product Review module adds a new table: spy_product_review. The table stores all product review related information such as description, rating, locale, customer, product, etc. Product Reviews in Search product-review type is defined under the already existing index in Search. ...",t:"Under the Hood - Product Reviews"},"416":{i:0.00373917499798292,u:"../content/capabilities/product_management/product_ttl/product-ttl.htm",a:" With TTL  you can easily define from and till when your product(s) will be visible and available for purchase by your customers, without having to manually manage your inventory. This feature is extremely useful if you sell products with expiry date, seasonal products or products that are valid for ...",t:"Product TTL (Time To Live)"},"417":{i:0.00395200799773032,u:"../content/capabilities/product_management/product-store_relation/product-store-relation.htm",a:"\n            In a multi-store environment it might be necessary to configure the abstract product appearance per store (by default, all abstract products are available in all stores).\n            A dedicated partial form in Zed Admin UI allows to manage abstract product-store relations.\n            ...",t:"Product-Store Relation"},"418":{i:0.00143621941550891,u:"../content/capabilities/product_management/product-store_relation/product-store-relation-feature-integration.htm",a:"General Information \n            By default abstract products are available in all stores. This feature provides additional configuration when:\n             you have multiple stores, and you want to manage the appearance of abstract products per store. Prerequisites To prepare your project to work ...",t:"Feature Integration - Multi-Store Products"},"419":{i:0.00143621941550891,u:"../content/capabilities/product_management/product-store_relation/product-store-relation-under-the-hood.htm",a:"Database Schema \n            The Product module introduces a new table: spy_product_abstract_store. The table stores all abstract product-store relations. An abstract product is available in a store when it has a\n            spy_product_abstract_store row for the given abstract product and store ...",t:"Under the Hood - Multi-Store Products"},"420":{i:0.000560908467393122,u:"../content/capabilities/product_management/about-products.htm",a:"The following (Undefined variable: General.bundle/module)s are used to establish product functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of ...",t:"About Products"},"421":{i:0.00116585290885496,u:"../content/capabilities/product_management/dynamic-product-labels.htm",a:"ML \"You can assign Product Labels to highlight specific products in your shop. Customize the look and text of the Labels as they appear in the shop. Any association can be a Label, such as \"\"Sale\"\" or \"\"Christmas\"\". \nProducts that are new in your shop can automatically be marked with the Dynamic ...",t:"Dynamic Product Labels"},"422":{i:0.00115687520721549,u:"../content/capabilities/product_management/mg-category.htm",a:"Upgrading from Version 3.* to Version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"423":{i:0.0014034189404989,u:"../content/capabilities/product_management/mg-product-bundle.htm",a:"Upgrading from Version 3.* to Version 4.* \n             In version 4 we have added support for multi-currency. First of all make sure you  migrated the Price module .              If you extended ProductBundleCartExpander, then you have to adapt some code because we changed how price is selected for ...",t:"Migration Guide - Product Bundle"},"424":{i:0.0014034189404989,u:"../content/capabilities/product_management/mg-product-label-gui.htm",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . \n          We have changed ZED tables to use PriceProductFacade instead of the database join to get price, because that requires ...",t:"Migration Guide - Product Label GUI"},"425":{i:0.00114687111115379,u:"../content/capabilities/product_management/mg-product-label.htm",a:"Upgrading from Version 1.* to Version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product Label Rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"426":{i:0.00286056355672428,u:"../content/capabilities/product_management/mg-product-management.htm",a:"Upgrading from Version 0.9.* to Version 0.10.* The new version provides support to manage \"abstract product-store\" relations per store. Update / install spryker/product to at least 6.0.0 version. You can find additional help for feature migration  here . Update / install spryker/productmanagement to ...",t:"Migration Guide - ProductManagement"},"427":{i:0.00216191846841742,u:"../content/capabilities/product_management/mg-product-option-cart-connector.htm",a:"Upgrading from Version 4.* to Version 5.* Update spryker/product-option to at least version 6.0.0. You can find additional information to product option module upgrade:  here . Install/Update spryker/price to at least version 5.0.0.  Update spryker/product-option-cart-connector to version 5.0.0. \n   ...",t:"Migration Guide - Product Option Cart Connector"},"428":{i:0.000640370699369438,u:"../content/capabilities/product_management/mg-product-option-discount-connector.htm",a:"Upgrading from Version 2.* to Version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product Label Gui  ",t:"Migration Guide - ProductOptionDiscountConnector"},"429":{i:0.000560908467393122,u:"../content/capabilities/product_management/mg-product-option-exporter.htm",a:"Upgrading from version 2.* to version 3.* The ProductOptionExporter  module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax   .   See also: Learn how to migrate  Product Learn how to migrate Product Bundle Learn how to migrate Product Label Learn how to migrate Product ...",t:"Migration Guide - ProductOptionExporter"},"430":{i:0.00316288759180154,u:"../content/capabilities/product_management/mg-product-option.htm",a:"Upgrading from Version 5.* to Version 6.* Update spryker/product-option to at least version 6.0.0. Install/Update spryker/currency to at least version 3.0.0. You can find additional information to currency module upgrade:  here . Install/Update spryker/price to at least version 5.0.0. Update ...",t:"Migration Guide - Product Option"},"431":{i:0.000890145400394924,u:"../content/capabilities/product_management/mg-product-relation-collector.htm",a:"Upgrading from Version 1.* to Version 2.* \n            From version 2 we added support for multi-currency. \n          First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Relation Collector"},});