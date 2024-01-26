import React from 'react';
import  ReactDOM  from 'react-dom/client';

const dataList=[
  {
    "id": "card.store:store:378992",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Jersey Mike's Subs",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "9 min · Ready in 16 min",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33c0e2ce-c3c4-4640-8f35-159a44472df6-retina-large-jpeg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [
            {
                "key": "modality_icon",
                "value": {
                    "uri": null,
                    "placeholder": null,
                    "local": "driving-icon",
                    "style": "UNSPECIFIED",
                    "logging": null,
                    "events": null,
                    "__typename": "FacetV2Image"
                },
                "__typename": "FacetV2ImageTuple"
            }
        ],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/378992/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMV0sImlzX3NpYmxpbmciOmZhbHNlLCJmb3JjZV9zdG9yZV9hdmFpbGFiaWxpdHlfdjIiOmZhbHNlLCJidW5kbGVfZ2xvYmFsX3NlYXJjaF9jb250ZXh0IjpudWxsfQ==&pickup=true\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.73428201675415,\"display_num_ratings\":\"(6,000+)\"},\"savelists\":[],\"store_id\":\"378992\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":30,\"badges\":\"\",\"business_id\":\"1431\",\"business_vertical_id\":\"0\",\"card_position\":6,\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_name\":\"Top pickup restaurants nearby\",\"container_store_list_size\":12,\"delivery_fee_amount\":99,\"delivery_fee_str\":\"$0.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33c0e2ce-c3c4-4640-8f35-159a44472df6-retina-large-jpeg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$0.99 delivery fee\",\"fulfillment_type\":\"PICKUP\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"modality_icon\":\"DRIVING_ICON\",\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T01:30:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"6044\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":1,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":0.40622761845588684,\"star_rating\":\"4.734282\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.96570562852029,\"store_id\":\"378992\",\"store_latitude\":42.2350768,\"store_longitude\":-83.2687166,\"store_name\":\"Jersey Mike's Subs\",\"store_prediction_score\":0.10405176915827141,\"store_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"1\",\"travel_time_in_minutes\":\"9\",\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:23004030",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Pizza Hut",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "9 min · Ready in 19 min",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f89e4829-15d8-4f77-953d-32d65e12eda0-retina-large.JPG",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [
            {
                "key": "modality_icon",
                "value": {
                    "uri": null,
                    "placeholder": null,
                    "local": "driving-icon",
                    "style": "UNSPECIFIED",
                    "logging": null,
                    "events": null,
                    "__typename": "FacetV2Image"
                },
                "__typename": "FacetV2ImageTuple"
            }
        ],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/23004030/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxOTZdLCJpc19zaWJsaW5nIjpmYWxzZSwiZm9yY2Vfc3RvcmVfYXZhaWxhYmlsaXR5X3YyIjpmYWxzZSwiYnVuZGxlX2dsb2JhbF9zZWFyY2hfY29udGV4dCI6bnVsbH0=&pickup=true\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[{\"background_color\":\"00838A\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"emphasis\",\"dls_text_style\":\"\",\"leading_icon\":\"deals/fill\",\"placement\":\"hero_overlay\",\"text\":\"$5 off orders of $25+ at Pizza Hut®\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.513812065124512,\"display_num_ratings\":\"(900+)\"},\"savelists\":[],\"store_id\":\"23004030\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":40,\"badges\":\"text:$5 off orders of $25+ at Pizza Hut®,type:offer;\",\"business_id\":\"351380\",\"business_vertical_id\":\"0\",\"card_position\":7,\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_name\":\"Top pickup restaurants nearby\",\"container_store_list_size\":12,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/f89e4829-15d8-4f77-953d-32d65e12eda0-retina-large.JPG\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"fulfillment_type\":\"PICKUP\",\"has_offer_badges\":true,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"modality_icon\":\"DRIVING_ICON\",\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T04:39:59Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"905\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.513812\",\"store_display_asap_time\":\"40 min\",\"store_distance_in_miles\":2.976084862967887,\"store_id\":\"23004030\",\"store_latitude\":42.2322771,\"store_longitude\":-83.26845469999999,\"store_name\":\"Pizza Hut\",\"store_prediction_score\":0.133523628115654,\"store_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"1\",\"travel_time_in_minutes\":\"9\",\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:238406",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Malek Al Kabob",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "9 min · Ready in 17 min",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$1.49 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/ab7a08d8-711c-4432-803c-a709f0f75b2d.jpg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [
            {
                "key": "modality_icon",
                "value": {
                    "uri": null,
                    "placeholder": null,
                    "local": "driving-icon",
                    "style": "UNSPECIFIED",
                    "logging": null,
                    "events": null,
                    "__typename": "FacetV2Image"
                },
                "__typename": "FacetV2ImageTuple"
            }
        ],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/238406/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMV0sImlzX3NpYmxpbmciOmZhbHNlLCJmb3JjZV9zdG9yZV9hdmFpbGFiaWxpdHlfdjIiOmZhbHNlLCJidW5kbGVfZ2xvYmFsX3NlYXJjaF9jb250ZXh0IjpudWxsfQ==&pickup=true\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.634975910186768,\"display_num_ratings\":\"(7,100+)\"},\"savelists\":[],\"store_id\":\"238406\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":33,\"badges\":\"\",\"business_id\":\"126183\",\"business_vertical_id\":\"0\",\"card_position\":8,\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_name\":\"Top pickup restaurants nearby\",\"container_store_list_size\":12,\"delivery_fee_amount\":149,\"delivery_fee_str\":\"$1.49 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/ab7a08d8-711c-4432-803c-a709f0f75b2d.jpg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$1.49 delivery fee\",\"fulfillment_type\":\"PICKUP\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"modality_icon\":\"DRIVING_ICON\",\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T02:40:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"7142\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":0.7599648833274841,\"star_rating\":\"4.634976\",\"store_display_asap_time\":\"33 min\",\"store_distance_in_miles\":3.746280966403183,\"store_id\":\"238406\",\"store_latitude\":42.226425,\"store_longitude\":-83.2539334,\"store_name\":\"Malek Al Kabob\",\"store_prediction_score\":0.14784189916298818,\"store_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"1\",\"travel_time_in_minutes\":\"9\",\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:ad_378992",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Jersey Mike's Subs",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "9 min · Ready in 16 min",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            },
            {
                "key": "sponsored_description",
                "value": " • $0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33c0e2ce-c3c4-4640-8f35-159a44472df6-retina-large-jpeg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [
            {
                "key": "modality_icon",
                "value": {
                    "uri": null,
                    "placeholder": null,
                    "local": "driving-icon",
                    "style": "UNSPECIFIED",
                    "logging": null,
                    "events": null,
                    "__typename": "FacetV2Image"
                },
                "__typename": "FacetV2ImageTuple"
            }
        ],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/378992/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMV0sImlzX3NpYmxpbmciOmZhbHNlLCJmb3JjZV9zdG9yZV9hdmFpbGFiaWxpdHlfdjIiOmZhbHNlLCJidW5kbGVfZ2xvYmFsX3NlYXJjaF9jb250ZXh0IjpudWxsfQ==&pickup=true\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[{\"background_color\":\"494949\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"informational\",\"dls_tag_type\":\"default\",\"dls_text_style\":\"Body2\",\"leading_icon\":\"none\",\"placement\":\"sponsored_descriptor\",\"text\":\"Sponsored\",\"trailing_icon\":\"none\",\"type\":\"sponsored\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.73428201675415,\"display_num_ratings\":\"(6,000+)\"},\"savelists\":[],\"store_id\":\"378992\"}",
    "logging": "{\"ad_auction_id\":\"b2fceba8-3dd9-abbc-8e82-7f0d5017b6cb\",\"ad_group_id\":\"a24592c9-e89b-4382-9633-7df2db6f1deb\",\"asap_available\":true,\"asap_time\":30,\"badges\":\"text:Sponsored,type:sponsored;\",\"business_id\":\"1431\",\"business_vertical_id\":\"0\",\"campaign_id\":\"ca49acf5-0e88-4227-9f42-89b0dd1a84a7\",\"card_position\":9,\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_name\":\"Top pickup restaurants nearby\",\"container_store_list_size\":12,\"delivery_fee_amount\":99,\"delivery_fee_str\":\"$0.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/33c0e2ce-c3c4-4640-8f35-159a44472df6-retina-large-jpeg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$0.99 delivery fee\",\"fulfillment_type\":\"PICKUP\",\"has_offer_badges\":true,\"is_cross_vertical\":true,\"is_sponsored\":true,\"minimum_subtotal_amount\":0,\"modality_icon\":\"DRIVING_ICON\",\"next_close_time\":\"2024-01-27T01:30:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"6044\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":1,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"star_rating\":\"4.734282\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.96570562852029,\"store_id\":\"378992\",\"store_latitude\":42.2350768,\"store_longitude\":-83.2687166,\"store_name\":\"Jersey Mike's Subs\",\"store_primary_vertical_id\":\"1\",\"travel_time_in_minutes\":\"9\",\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:1339896",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Taylor kabob",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "10 min · Ready in 20 min",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8af749a2-e5ab-49e7-916e-28a7791013af.jpg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [
            {
                "key": "modality_icon",
                "value": {
                    "uri": null,
                    "placeholder": null,
                    "local": "driving-icon",
                    "style": "UNSPECIFIED",
                    "logging": null,
                    "events": null,
                    "__typename": "FacetV2Image"
                },
                "__typename": "FacetV2ImageTuple"
            }
        ],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/1339896/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMV0sImlzX3NpYmxpbmciOmZhbHNlLCJmb3JjZV9zdG9yZV9hdmFpbGFiaWxpdHlfdjIiOmZhbHNlLCJidW5kbGVfZ2xvYmFsX3NlYXJjaF9jb250ZXh0IjpudWxsfQ==&pickup=true\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.743093967437744,\"display_num_ratings\":\"(720+)\"},\"savelists\":[],\"store_id\":\"1339896\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":44,\"badges\":\"\",\"business_id\":\"633114\",\"business_vertical_id\":\"0\",\"card_position\":10,\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_name\":\"Top pickup restaurants nearby\",\"container_store_list_size\":12,\"delivery_fee_amount\":99,\"delivery_fee_str\":\"$0.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/8af749a2-e5ab-49e7-916e-28a7791013af.jpg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$0.99 delivery fee\",\"fulfillment_type\":\"PICKUP\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"modality_icon\":\"DRIVING_ICON\",\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T01:40:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"724\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1.100000023841858,\"star_rating\":\"4.743094\",\"store_display_asap_time\":\"44 min\",\"store_distance_in_miles\":4.845835128829078,\"store_id\":\"1339896\",\"store_latitude\":42.2565836,\"store_longitude\":-83.2373981,\"store_name\":\"Taylor kabob\",\"store_prediction_score\":0.170709567491782,\"store_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"1\",\"travel_time_in_minutes\":\"10\",\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:400377",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "The Taco Stand Taqueria",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "11 min · Ready in 11 min",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$1.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/cee8f1e9-6e8c-4617-b7db-5439e16b8066.jpg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [
            {
                "key": "modality_icon",
                "value": {
                    "uri": null,
                    "placeholder": null,
                    "local": "driving-icon",
                    "style": "UNSPECIFIED",
                    "logging": null,
                    "events": null,
                    "__typename": "FacetV2Image"
                },
                "__typename": "FacetV2ImageTuple"
            }
        ],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"store/400377/?cursor=eyJzdG9yZV92ZXJ0aWNhbF9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjp7InF1ZXJ5IjoiIiwiaXRlbV9pZHMiOltdLCJzZWFyY2hfdGVybSI6IiIsInZlcnRpY2FsX2lkIjpudWxsLCJ2ZXJ0aWNhbF9uYW1lIjoiIn0sInN0b3JlX3ByaW1hcnlfdmVydGljYWxfaWRzIjpbMSwxNDRdLCJpc19zaWJsaW5nIjpmYWxzZSwiZm9yY2Vfc3RvcmVfYXZhaWxhYmlsaXR5X3YyIjpmYWxzZSwiYnVuZGxlX2dsb2JhbF9zZWFyY2hfY29udGV4dCI6bnVsbH0=&pickup=true\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.783332824707031,\"display_num_ratings\":\"(11,400+)\"},\"savelists\":[],\"store_id\":\"400377\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":36,\"badges\":\"\",\"business_id\":\"121459\",\"business_vertical_id\":\"0\",\"card_position\":11,\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_name\":\"Top pickup restaurants nearby\",\"container_store_list_size\":12,\"delivery_fee_amount\":199,\"delivery_fee_str\":\"$1.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/cee8f1e9-6e8c-4617-b7db-5439e16b8066.jpg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$1.99 delivery fee\",\"fulfillment_type\":\"PICKUP\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"modality_icon\":\"DRIVING_ICON\",\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T02:00:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"11400\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":0.5328019261360168,\"star_rating\":\"4.783333\",\"store_display_asap_time\":\"36 min\",\"store_distance_in_miles\":4.887886694749381,\"store_id\":\"400377\",\"store_latitude\":42.22713679999999,\"store_longitude\":-83.2314063,\"store_name\":\"The Taco Stand Taqueria\",\"store_prediction_score\":0.12966135767382791,\"store_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"1\",\"travel_time_in_minutes\":\"11\",\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.action:more:c92d3c3f-ff3c-4945-a1ea-7824cea60bb7",
    "childrenCount": 0,
    "component": {
        "id": "card.action",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "More Stores",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": null,
        "descriptionTextAttributes": null,
        "custom": [],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": null,
            "placeholder": null,
            "local": "arrow-right",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": null,
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"facet_feed/eyJvZmZzZXQiOjAsImNvbnRlbnRfaWRzIjpbIjEzMTMyMTYiLCIzMDc0NTUiLCIyMzg0NjMiLCI0MDU5ODkiLCIxMjAwMTk4IiwiMzc4OTkyIiwiMjMwMDQwMzAiLCIyMzg0MDYiLCIxMzM5ODk2IiwiNDAwMzc3Il0sInJlcXVlc3RfcGFyZW50X2lkIjoiREVGQVVMVF9IT01FUEFHRSIsInJlcXVlc3RfY2hpbGRfaWQiOiJjYXJvdXNlbC5zdGFuZGFyZDpzdG9yZV9jYXJvdXNlbDpjOTJkM2MzZi1mZjNjLTQ5NDUtYTFlYS03ODI0Y2VhNjBiYjciLCJyZXF1ZXN0X2NoaWxkX2NvbXBvbmVudF9pZCI6ImNhcmQuYWN0aW9uIiwiY3Jvc3NfdmVydGljYWxfcGFnZV90eXBlIjoiREVGQVVMVF9IT01FUEFHRSIsInBhZ2Vfc3RhY2tfdHJhY2UiOltdLCJ2ZXJ0aWNhbF9pZHMiOltdLCJ2ZXJ0aWNhbF9jb250ZXh0X2lkIjpudWxsLCJsYXlvdXRfb3ZlcnJpZGUiOiJVTlNQRUNJRklFRCIsInNpbmdsZV9zdG9yZV9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjpudWxsLCJjYXRlZ29yeV9pZHMiOltdLCJjb2xsZWN0aW9uX2lkcyI6W10sImRkX3BsYWNlX2lkcyI6WyI1YmJjYjFlYS05NmZkLTRjMTItYjdjOS03N2ZkMmE5ZmZkNGQiXSwiaXNfcGFnaW5hdGlvbl9mYWxsYmFjayI6bnVsbCwic291cmNlX3BhZ2VfdHlwZSI6bnVsbCwiYmFzZUN1cnNvciI6eyJwYWdlX2lkIjoiYzkyZDNjM2YtZmYzYy00OTQ1LWExZWEtNzgyNGNlYTYwYmI3IiwicGFnZV90eXBlIjoiU1RPUkVfQ0FST1VTRUxfTEFORElORyIsImN1cnNvcl92ZXJzaW9uIjoiRkFDRVQifSwidmVydGljYWxfbmFtZXMiOnt9LCJpdGVtX2lkcyI6W10sIm1lcmNoYW50X3N1cHBsaWVkX2lkcyI6W10sImlzX291dF9vZl9zdG9jayI6bnVsbCwibWVudV9pZCI6bnVsbCwidHJhY2tpbmciOm51bGwsImRpZXRhcnlfdGFnIjpudWxsLCJvcmlnaW5fdGl0bGUiOm51bGwsInJhbmtlZF9yZW1haW5pbmdfY29sbGVjdGlvbl9pZHMiOm51bGwsImN1cnNvclZlcnNpb24iOiJGQUNFVF9DT05URU5UX09GRlNFVCIsInBhZ2VJZCI6ImM5MmQzYzNmLWZmM2MtNDk0NS1hMWVhLTc4MjRjZWE2MGJiNyIsInBhZ2VUeXBlIjoiU1RPUkVfQ0FST1VTRUxfTEFORElORyJ9/\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": null,
    "logging": "{\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_multiplier\":1,\"container_name\":\"Top pickup restaurants nearby\",\"container_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"container_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"container_score\":0.013267348421564407,\"is_cross_vertical\":true,\"mor_breakdown_scores\":\"[]\",\"page\":\"explore_page\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"programmatic_boost_multiplier\":1,\"type\":\"see_all\",\"ucb_uncertainty_score\":0.009999999776482582,\"ur_multiplier\":0.5229644775390625,\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "carousel.standard:store_carousel:c92d3c3f-ff3c-4945-a1ea-7824cea60bb7",
    "childrenCount": 13,
    "component": {
        "id": "carousel.standard",
        "category": "carousel",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Top pickup restaurants nearby",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": null,
        "descriptionTextAttributes": null,
        "custom": [],
        "__typename": "FacetV2Text"
    },
    "images": null,
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"facet_feed/eyJvZmZzZXQiOjAsImNvbnRlbnRfaWRzIjpbIjEzMTMyMTYiLCIzMDc0NTUiLCIyMzg0NjMiLCI0MDU5ODkiLCIxMjAwMTk4IiwiMzc4OTkyIiwiMjMwMDQwMzAiLCIyMzg0MDYiLCIxMzM5ODk2IiwiNDAwMzc3Il0sInJlcXVlc3RfcGFyZW50X2lkIjoiREVGQVVMVF9IT01FUEFHRSIsInJlcXVlc3RfY2hpbGRfaWQiOiJjYXJvdXNlbC5zdGFuZGFyZDpzdG9yZV9jYXJvdXNlbDpjOTJkM2MzZi1mZjNjLTQ5NDUtYTFlYS03ODI0Y2VhNjBiYjciLCJyZXF1ZXN0X2NoaWxkX2NvbXBvbmVudF9pZCI6ImNhcm91c2VsLnN0YW5kYXJkIiwiY3Jvc3NfdmVydGljYWxfcGFnZV90eXBlIjoiREVGQVVMVF9IT01FUEFHRSIsInBhZ2Vfc3RhY2tfdHJhY2UiOltdLCJ2ZXJ0aWNhbF9pZHMiOltdLCJ2ZXJ0aWNhbF9jb250ZXh0X2lkIjpudWxsLCJsYXlvdXRfb3ZlcnJpZGUiOiJVTlNQRUNJRklFRCIsInNpbmdsZV9zdG9yZV9pZCI6bnVsbCwic2VhcmNoX2l0ZW1fY2Fyb3VzZWxfY3Vyc29yIjpudWxsLCJjYXRlZ29yeV9pZHMiOltdLCJjb2xsZWN0aW9uX2lkcyI6W10sImRkX3BsYWNlX2lkcyI6WyI1YmJjYjFlYS05NmZkLTRjMTItYjdjOS03N2ZkMmE5ZmZkNGQiXSwiaXNfcGFnaW5hdGlvbl9mYWxsYmFjayI6bnVsbCwic291cmNlX3BhZ2VfdHlwZSI6bnVsbCwiYmFzZUN1cnNvciI6eyJwYWdlX2lkIjoiYzkyZDNjM2YtZmYzYy00OTQ1LWExZWEtNzgyNGNlYTYwYmI3IiwicGFnZV90eXBlIjoiU1RPUkVfQ0FST1VTRUxfTEFORElORyIsImN1cnNvcl92ZXJzaW9uIjoiRkFDRVQifSwidmVydGljYWxfbmFtZXMiOnt9LCJpdGVtX2lkcyI6W10sIm1lcmNoYW50X3N1cHBsaWVkX2lkcyI6W10sImlzX291dF9vZl9zdG9jayI6bnVsbCwibWVudV9pZCI6bnVsbCwidHJhY2tpbmciOm51bGwsImRpZXRhcnlfdGFnIjpudWxsLCJvcmlnaW5fdGl0bGUiOm51bGwsInJhbmtlZF9yZW1haW5pbmdfY29sbGVjdGlvbl9pZHMiOm51bGwsImN1cnNvclZlcnNpb24iOiJGQUNFVF9DT05URU5UX09GRlNFVCIsInBhZ2VJZCI6ImM5MmQzYzNmLWZmM2MtNDk0NS1hMWVhLTc4MjRjZWE2MGJiNyIsInBhZ2VUeXBlIjoiU1RPUkVfQ0FST1VTRUxfTEFORElORyJ9/\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": {
        "omitFooter": true,
        "gridSpecs": null,
        "dlsPadding": null,
        "__typename": "FacetV2Layout"
    },
    "custom": "{\"show_inline_nav_buttons\":true}",
    "logging": "{\"container\":\"cluster\",\"container_id\":\"c92d3c3f-ff3c-4945-a1ea-7824cea60bb7\",\"container_multiplier\":1,\"container_name\":\"Top pickup restaurants nearby\",\"container_predictor_model_ids\":[\"store_ranking_v1_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"container_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"container_score\":0.013267348421564407,\"is_cross_vertical\":true,\"mor_breakdown_scores\":\"[]\",\"page\":\"explore_page\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"programmatic_boost_multiplier\":1,\"ucb_uncertainty_score\":0.009999999776482582,\"ur_multiplier\":0.5229644775390625,\"vertical_position\":13}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "divider.standard:748a1234-1496-4b83-90c9-a5e92c44ce58",
    "childrenCount": 0,
    "component": {
        "id": "divider.standard",
        "category": "divider",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": null,
    "images": null,
    "events": null,
    "style": null,
    "layout": null,
    "custom": null,
    "logging": null,
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:2879175",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Merriman Liquor",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "2.7 mi • 30 min • $​0 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/3f184e78-a132-47cb-bec5-2565855714ca.12",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/2879175/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.792325019836426,\"display_num_ratings\":\"(1,700+)\"},\"savelists\":[],\"store_id\":\"2879175\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":30,\"badges\":\"\",\"business_id\":\"1063494\",\"business_vertical_id\":\"168\",\"card_position\":0,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/3f184e78-a132-47cb-bec5-2565855714ca.12\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T03:15:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"1772\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.792325\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.6549961983747816,\"store_id\":\"2879175\",\"store_latitude\":42.2677998,\"store_longitude\":-83.348625,\"store_name\":\"Merriman Liquor\",\"store_prediction_score\":0.09696067869663239,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:24766000",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Andrew's Liquor",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "5.4 mi • 37 min • $0.99 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/aed427ac-d466-4c38-a7cc-8e08ee8e5b0f.12",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/24766000/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.899264812469482,\"display_num_ratings\":\"(950+)\"},\"savelists\":[],\"store_id\":\"24766000\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":37,\"badges\":\"\",\"business_id\":\"11160680\",\"business_vertical_id\":\"168\",\"card_position\":1,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":99,\"delivery_fee_str\":\"$0.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/aed427ac-d466-4c38-a7cc-8e08ee8e5b0f.12\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$0.99 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T04:14:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"953\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.899265\",\"store_display_asap_time\":\"37 min\",\"store_distance_in_miles\":5.438567566665853,\"store_id\":\"24766000\",\"store_latitude\":42.3116343,\"store_longitude\":-83.3313016,\"store_name\":\"Andrew's Liquor\",\"store_prediction_score\":0.0956295058131218,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:2323008",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Taylor Party Store",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "2.9 mi • 30 min • $​0 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5b00b668-6f6d-447c-91e3-84fcd7d53014.12",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/2323008/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.768143177032471,\"display_num_ratings\":\"(1,000+)\"},\"savelists\":[],\"store_id\":\"2323008\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":30,\"badges\":\"\",\"business_id\":\"926430\",\"business_vertical_id\":\"168\",\"card_position\":2,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/5b00b668-6f6d-447c-91e3-84fcd7d53014.12\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T02:30:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"1061\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.768143\",\"store_display_asap_time\":\"30 min\",\"store_distance_in_miles\":2.9442051382563634,\"store_id\":\"2323008\",\"store_latitude\":42.2423742,\"store_longitude\":-83.2704772,\"store_name\":\"Taylor Party Store\",\"store_prediction_score\":0.08751904219388962,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:2907335",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Party Palace",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "5.2 mi • 42 min • $​0 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b2eea08e-8c50-4ff8-abad-e4c18bc11c59.12",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/2907335/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.8447489738464355,\"display_num_ratings\":\"(1,000+)\"},\"savelists\":[],\"store_id\":\"2907335\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":42,\"badges\":\"\",\"business_id\":\"1065135\",\"business_vertical_id\":\"168\",\"card_position\":3,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/b2eea08e-8c50-4ff8-abad-e4c18bc11c59.12\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T04:14:59Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"1095\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.844749\",\"store_display_asap_time\":\"42 min\",\"store_distance_in_miles\":5.233768853811491,\"store_id\":\"2907335\",\"store_latitude\":42.2700239,\"store_longitude\":-83.2373436,\"store_name\":\"Party Palace\",\"store_prediction_score\":0.08650405704975128,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:23065199",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Top Shelf Liquor",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "6.2 mi • 50 min • $​0 delivery fee over $15",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee over $15",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/f7367ccc-3ae9-48fd-94ef-e042abec8210.9",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/23065199/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[{\"background_color\":\"00838A\",\"dls_tag_size\":\"small\",\"dls_tag_style\":\"highlight\",\"dls_tag_type\":\"emphasis\",\"dls_text_style\":\"\",\"leading_icon\":\"deals/fill\",\"placement\":\"hero_overlay\",\"text\":\"$0 delivery fee\",\"trailing_icon\":\"none\",\"type\":\"offer\"}],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.736930847167969,\"display_num_ratings\":\"(590+)\"},\"savelists\":[],\"store_id\":\"23065199\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":50,\"badges\":\"text:$0 delivery fee,type:offer;\",\"business_id\":\"11109196\",\"business_vertical_id\":\"168\",\"card_position\":4,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee over $15\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/f7367ccc-3ae9-48fd-94ef-e042abec8210.9\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee over $15\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":true,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":1500,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T04:14:59Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"593\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":false,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.736931\",\"store_display_asap_time\":\"50 min\",\"store_distance_in_miles\":6.22134794273827,\"store_id\":\"23065199\",\"store_latitude\":42.2581213,\"store_longitude\":-83.20981499999999,\"store_name\":\"Top Shelf Liquor\",\"store_prediction_score\":0.08264487236738205,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:25939156",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Maria's Market Place",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "8.2 mi • 37 min • $1.99 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$1.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/bd1f5b64-9144-4527-a627-33744c2d7e0d.9",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/25939156/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.897959232330322,\"display_num_ratings\":\"(98)\"},\"savelists\":[],\"store_id\":\"25939156\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":37,\"badges\":\"\",\"business_id\":\"11099986\",\"business_vertical_id\":\"168\",\"card_position\":5,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":199,\"delivery_fee_str\":\"$1.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/bd1f5b64-9144-4527-a627-33744c2d7e0d.9\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$1.99 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T02:30:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"98\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.897959\",\"store_display_asap_time\":\"37 min\",\"store_distance_in_miles\":8.163556236340563,\"store_id\":\"25939156\",\"store_latitude\":42.3089556,\"store_longitude\":-83.448932,\"store_name\":\"Maria's Market Place\",\"store_prediction_score\":0.07809565216302872,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:24153683",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Norms Market",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "2.5 mi • 31 min • $​0 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/31b604a9-500a-4e36-812f-5e0bf36941d5.13",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/24153683/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.882352828979492,\"display_num_ratings\":\"(102)\"},\"savelists\":[],\"store_id\":\"24153683\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":31,\"badges\":\"\",\"business_id\":\"11316632\",\"business_vertical_id\":\"168\",\"card_position\":6,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/store/header/31b604a9-500a-4e36-812f-5e0bf36941d5.13\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T02:15:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"102\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.882353\",\"store_display_asap_time\":\"31 min\",\"store_distance_in_miles\":2.4790175668832664,\"store_id\":\"24153683\",\"store_latitude\":42.25524679999999,\"store_longitude\":-83.2886025,\"store_name\":\"Norms Market\",\"store_prediction_score\":0.0772615596652031,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:2376008",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Langley Liquor & Lottery",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "7.5 mi • 46 min • $0.99 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/22ecc211-2020-4e3c-8119-eb2ad18de95e-retina-large-jpeg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/2376008/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.853503227233887,\"display_num_ratings\":\"(780+)\"},\"savelists\":[],\"store_id\":\"2376008\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":46,\"badges\":\"\",\"business_id\":\"942505\",\"business_vertical_id\":\"168\",\"card_position\":7,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":99,\"delivery_fee_str\":\"$0.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/22ecc211-2020-4e3c-8119-eb2ad18de95e-retina-large-jpeg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$0.99 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T04:15:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"785\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.853503\",\"store_display_asap_time\":\"46 min\",\"store_distance_in_miles\":7.472582940991776,\"store_id\":\"2376008\",\"store_latitude\":42.2629993,\"store_longitude\":-83.1862483,\"store_name\":\"Langley Liquor & Lottery\",\"store_prediction_score\":0.07692600786685944,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:2302962",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Pinewood Party Store",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "8.0 mi • 48 min • $0.99 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$0.99 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/c05ab5f9-75fd-42a4-b011-776f7fee3629-retina-large-jpeg",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/2302962/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.8422980308532715,\"display_num_ratings\":\"(810+)\"},\"savelists\":[],\"store_id\":\"2302962\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":48,\"badges\":\"\",\"business_id\":\"921975\",\"business_vertical_id\":\"168\",\"card_position\":8,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":99,\"delivery_fee_str\":\"$0.99 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://cdn.doordash.com/media/photos/c05ab5f9-75fd-42a4-b011-776f7fee3629-retina-large-jpeg\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$0.99 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T04:14:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"818\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.842298\",\"store_display_asap_time\":\"48 min\",\"store_distance_in_miles\":7.99268796801994,\"store_id\":\"2302962\",\"store_latitude\":42.2554156,\"store_longitude\":-83.1733161,\"store_name\":\"Pinewood Party Store\",\"store_prediction_score\":0.0729578509926796,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.store:store:22926395",
    "childrenCount": 0,
    "component": {
        "id": "card.store",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "Wayne Med Market",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": "6.0 mi • 36 min • $​0 delivery fee",
        "descriptionTextAttributes": null,
        "custom": [
            {
                "key": "delivery_fee_string",
                "value": "$​0 delivery fee",
                "__typename": "FacetV2TextTuple"
            }
        ],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6fa518ea-c869-45d3-a312-8b1d84396274-retina-large.JPEG",
            "placeholder": null,
            "local": null,
            "style": "ROUNDED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": {
            "uri": null,
            "placeholder": null,
            "local": "dashpass-badge",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"convenience/store/22926395/?pickup=false\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": "{\"badges\":[],\"is_currently_available\":true,\"rating\":{\"average_rating\":4.852394104003906,\"display_num_ratings\":\"(750+)\"},\"savelists\":[],\"store_id\":\"22926395\"}",
    "logging": "{\"asap_available\":true,\"asap_time\":36,\"badges\":\"\",\"business_id\":\"11067770\",\"business_vertical_id\":\"168\",\"card_position\":9,\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_name\":\"Local liquor stores\",\"container_store_list_size\":10,\"delivery_fee_amount\":0,\"delivery_fee_str\":\"$0 delivery fee\",\"display_image_type\":\"hero\",\"display_image_url\":\"https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/photosV2/6fa518ea-c869-45d3-a312-8b1d84396274-retina-large.JPEG\",\"express_eta_shown\":false,\"final_delivery_fee_line_str\":\"$​0 delivery fee\",\"fulfillment_type\":\"DELIVERY\",\"has_offer_badges\":false,\"is_cross_vertical\":true,\"is_sponsored\":false,\"minimum_subtotal_amount\":0,\"mor_breakdown_scores\":\"[]\",\"next_close_time\":\"2024-01-27T03:00:00Z\",\"next_open_time\":\"2024-01-26T15:42:26Z\",\"num_star_rating\":\"752\",\"page\":\"explore_page\",\"pickup_eta_carousel_ranking_type\":\"lr15ed_with_dbp_weighted_distance\",\"pickup_reorder_ranking_type\":\"DEFAULT\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"price_range\":2,\"request_id\":\"de17bd52-a213-430a-a3f3-fe9d3315aad5\",\"savelist_store_link_ids\":\"\",\"shows_dashpass_badging\":true,\"shows_store_address\":false,\"sr_multiplier\":1,\"star_rating\":\"4.852394\",\"store_display_asap_time\":\"36 min\",\"store_distance_in_miles\":6.018205710621963,\"store_id\":\"22926395\",\"store_latitude\":42.3074003,\"store_longitude\":-83.38782789999999,\"store_name\":\"Wayne Med Market\",\"store_prediction_score\":0.07244683057069778,\"store_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"store_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"store_primary_vertical_id\":\"170\",\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
},
{
    "id": "card.action:more:3d11fbe6-c027-4bb3-8def-916305d248bf",
    "childrenCount": 0,
    "component": {
        "id": "card.action",
        "category": "card",
        "__typename": "FacetV2Component"
    },
    "name": null,
    "text": {
        "title": "More Stores",
        "titleTextAttributes": null,
        "subtitle": null,
        "subtitleTextAttributes": null,
        "accessory": null,
        "accessoryTextAttributes": null,
        "description": null,
        "descriptionTextAttributes": null,
        "custom": [],
        "__typename": "FacetV2Text"
    },
    "images": {
        "main": {
            "uri": null,
            "placeholder": null,
            "local": "arrow-right",
            "style": "UNSPECIFIED",
            "logging": null,
            "events": null,
            "__typename": "FacetV2Image"
        },
        "icon": null,
        "background": null,
        "accessory": null,
        "custom": [],
        "__typename": "FacetV2Images"
    },
    "events": {
        "click": {
            "name": "navigate",
            "data": "{\"domain\":\"https://www.doordash.com/\",\"uri\":\"facet_feed/eyJvZmZzZXQiOjAsImNvbnRlbnRfaWRzIjpbIjI4NzkxNzUiLCIyNDc2NjAwMCIsIjIzMjMwMDgiLCIyOTA3MzM1IiwiMjMwNjUxOTkiLCIyNTkzOTE1NiIsIjI0MTUzNjgzIiwiMjM3NjAwOCIsIjIzMDI5NjIiLCIyMjkyNjM5NSJdLCJyZXF1ZXN0X3BhcmVudF9pZCI6IkRFRkFVTFRfSE9NRVBBR0UiLCJyZXF1ZXN0X2NoaWxkX2lkIjoiY2Fyb3VzZWwuc3RhbmRhcmQ6c3RvcmVfY2Fyb3VzZWw6M2QxMWZiZTYtYzAyNy00YmIzLThkZWYtOTE2MzA1ZDI0OGJmIiwicmVxdWVzdF9jaGlsZF9jb21wb25lbnRfaWQiOiJjYXJkLmFjdGlvbiIsImNyb3NzX3ZlcnRpY2FsX3BhZ2VfdHlwZSI6IkRFRkFVTFRfSE9NRVBBR0UiLCJwYWdlX3N0YWNrX3RyYWNlIjpbXSwidmVydGljYWxfaWRzIjpbXSwidmVydGljYWxfY29udGV4dF9pZCI6bnVsbCwibGF5b3V0X292ZXJyaWRlIjoiVU5TUEVDSUZJRUQiLCJzaW5nbGVfc3RvcmVfaWQiOm51bGwsInNlYXJjaF9pdGVtX2Nhcm91c2VsX2N1cnNvciI6bnVsbCwiY2F0ZWdvcnlfaWRzIjpbXSwiY29sbGVjdGlvbl9pZHMiOltdLCJkZF9wbGFjZV9pZHMiOlsiNWJiY2IxZWEtOTZmZC00YzEyLWI3YzktNzdmZDJhOWZmZDRkIl0sImlzX3BhZ2luYXRpb25fZmFsbGJhY2siOm51bGwsInNvdXJjZV9wYWdlX3R5cGUiOm51bGwsImJhc2VDdXJzb3IiOnsicGFnZV9pZCI6IjNkMTFmYmU2LWMwMjctNGJiMy04ZGVmLTkxNjMwNWQyNDhiZiIsInBhZ2VfdHlwZSI6IlNUT1JFX0NBUk9VU0VMX0xBTkRJTkciLCJjdXJzb3JfdmVyc2lvbiI6IkZBQ0VUIn0sInZlcnRpY2FsX25hbWVzIjp7fSwiaXRlbV9pZHMiOltdLCJtZXJjaGFudF9zdXBwbGllZF9pZHMiOltdLCJpc19vdXRfb2Zfc3RvY2siOm51bGwsIm1lbnVfaWQiOm51bGwsInRyYWNraW5nIjpudWxsLCJkaWV0YXJ5X3RhZyI6bnVsbCwib3JpZ2luX3RpdGxlIjpudWxsLCJyYW5rZWRfcmVtYWluaW5nX2NvbGxlY3Rpb25faWRzIjpudWxsLCJjdXJzb3JWZXJzaW9uIjoiRkFDRVRfQ09OVEVOVF9PRkZTRVQiLCJwYWdlSWQiOiIzZDExZmJlNi1jMDI3LTRiYjMtOGRlZi05MTYzMDVkMjQ4YmYiLCJwYWdlVHlwZSI6IlNUT1JFX0NBUk9VU0VMX0xBTkRJTkcifQ==/\"}",
            "__typename": "FacetV2Action"
        },
        "__typename": "FacetV2Events"
    },
    "style": null,
    "layout": null,
    "custom": null,
    "logging": "{\"container\":\"cluster\",\"container_id\":\"3d11fbe6-c027-4bb3-8def-916305d248bf\",\"container_multiplier\":1,\"container_name\":\"Local liquor stores\",\"container_predictor_model_ids\":[\"store_ranker_v2_baseline_1\",\"inflation_sr_multiplier_3_1\",\"store_percentage_match_v0_8\",\"exploration_ranker_for_sr_always_zero_1\",\"universal_ranker_v4_delay_signal_v1_1\",\"inflation_ur_multiplier_3_1\",\"programmatic_boosting_multiplier_2022_06_03_18_15_16\",\"impression_estimator_v1_2021_12_05_08_53_02\"],\"container_predictor_names\":[\"feed_ranking_auto_trained\",\"store_ranker_multiplier\",\"store_percentage_match\",\"store_ranker_exploration\",\"universal_feed_ranking\",\"universal_ranker_multiplier\",\"feed_programmatic_boosting\",\"ucb_uncertainty\"],\"container_score\":0.013075260755812224,\"is_cross_vertical\":true,\"mor_breakdown_scores\":\"[]\",\"page\":\"explore_page\",\"place_id\":\"5bbcb1ea-96fd-4c12-b7c9-77fd2a9ffd4d\",\"programmatic_boost_multiplier\":1.1799999475479126,\"type\":\"see_all\",\"ucb_uncertainty_score\":0.009999999776482582,\"ur_multiplier\":1,\"vertical_position\":14}",
    "__typename": "FacetV2",
    "childrenMap": []
}
];

const Header=()=>{
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg'/>
      </div>
      <div className='nav-items'>
        <ul >
          <li>Home</li>
          <li>About Us</li>  
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
     
    </div>
  )
}

const ResCard=(props)=>{
 const {restaData}=props;
 console.log(restaData)
 
  return (
    <div className='res-card'>
      <img alt='Biryani logo' className='res-logo' src={restaData?.images?.main?.uri} />
      <h3>{restaData?.text?.title}</h3>
      <h5>{restaData?.text?.description}</h5>
      <h5>4.5 Rating</h5>
      <h5>35 Minutes</h5>

    </div>
  )
}

const Body=()=>{
  return (
    <div className='body'>
        <div className='search'> Search</div>
        <div className='res-container'>
         {dataList.map((resData)=>
         <ResCard key={resData.id}restaData={resData}
         
         />)}
        

        </div>
    </div>
  )
}
const AppLayout=()=>{
  return(
    <div className='app'>
      {/* //Header
      //Body
      //Footer */}
      <Header/>
      <Body/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);