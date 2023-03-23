package com.theoplayercomscore.integration

import com.comscore.streaming.ContentDeliveryAdvertisementCapability
import com.comscore.streaming.ContentDeliveryComposition
import com.comscore.streaming.ContentDeliveryMode
import com.comscore.streaming.ContentDeliverySubscriptionType
import com.comscore.streaming.ContentDistributionModel
import com.comscore.streaming.ContentFeedType
import com.comscore.streaming.ContentMediaFormat
import com.comscore.streaming.ContentType

enum class ComscoreMediaType {
  LONG_FORM_ON_DEMAND,
  SHORT_FORM_ON_DEMAND,
  LIVE,
  USER_GENERATED_LONG_FORM_ON_DEMAND,
  USER_GENERATED_SHORT_FORM_ON_DEMAND,
  USER_GENERATED_LIVE,
  BUMPER,
  OTHER;

  fun toComscore(): Int {
    when(this){
      LONG_FORM_ON_DEMAND -> return ContentType.LONG_FORM_ON_DEMAND
      SHORT_FORM_ON_DEMAND -> return ContentType.SHORT_FORM_ON_DEMAND
      LIVE -> return ContentType.LIVE
      USER_GENERATED_LONG_FORM_ON_DEMAND -> return ContentType.USER_GENERATED_LONG_FORM_ON_DEMAND
      USER_GENERATED_SHORT_FORM_ON_DEMAND -> return ContentType.USER_GENERATED_SHORT_FORM_ON_DEMAND
      USER_GENERATED_LIVE -> return ContentType.USER_GENERATED_LIVE
      BUMPER -> return ContentType.BUMPER
      OTHER -> return ContentType.OTHER
    }
  }
}

enum class ComscoreFeedType {
  EASTHD,
  WESTHD,
  EASTSD,
  WESTSD;

  fun toComscore(): Int {
    when(this) {
      EASTHD -> return ContentFeedType.EAST_HD
      WESTHD -> return ContentFeedType.WEST_HD
      EASTSD -> return ContentFeedType.EAST_SD
      WESTSD -> return ContentFeedType.WEST_SD
    }
  }
}

enum class ComscoreDeliveryMode {
  LINEAR,
  ON_DEMAND;

  fun toComscore(): Int {
    when(this) {
      LINEAR -> return ContentDeliveryMode.LINEAR
      ON_DEMAND -> return ContentDeliveryMode.ON_DEMAND
    }
  }
}

enum class ComscoreDeliverySubscriptionType {
  TRADITIONAL_MVPD,
  VIRTUAL_MVPD,
  SUBSCRIPTION,
  TRANSACTIONAL,
  ADVERTISING,
  PREMIUM;

  fun toComscore(): Int {
    when(this) {
      TRADITIONAL_MVPD -> return ContentDeliverySubscriptionType.TRADITIONAL_MVPD
      VIRTUAL_MVPD -> return ContentDeliverySubscriptionType.VIRTUAL_MVPD
      SUBSCRIPTION -> return ContentDeliverySubscriptionType.SUBSCRIPTION
      TRANSACTIONAL -> return ContentDeliverySubscriptionType.TRANSACTIONAL
      ADVERTISING -> return ContentDeliverySubscriptionType.ADVERTISING
      PREMIUM -> return ContentDeliverySubscriptionType.PREMIUM
    }
  }
}

enum class ComscoreDeliveryComposition {
  CLEAN,
  EMBED;

  fun toComscore(): Int {
    when(this) {
      CLEAN -> return ContentDeliveryComposition.CLEAN
      EMBED -> return ContentDeliveryComposition.EMBED
    }
  }
}

enum class ComscoreDeliveryAdvertisementCapability {
  NONE,
  DYNAMIC_LOAD,
  DYNAMIC_REPLACEMENT,
  LINEAR_1DAY,
  LINEAR_2DAY,
  LINEAR_3DAY,
  LINEAR_4DAY,
  LINEAR_5DAY,
  LINEAR_6DAY,
  LINEAR_7DAY;

  fun toComscore(): Int {
    when(this) {
      NONE -> return ContentDeliveryAdvertisementCapability.NONE
      DYNAMIC_LOAD  -> return ContentDeliveryAdvertisementCapability.DYNAMIC_LOAD
      DYNAMIC_REPLACEMENT -> return ContentDeliveryAdvertisementCapability.DYNAMIC_REPLACEMENT
      LINEAR_1DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_1DAY
      LINEAR_2DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_2DAY
      LINEAR_3DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_3DAY
      LINEAR_4DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_4DAY
      LINEAR_5DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_5DAY
      LINEAR_6DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_6DAY
      LINEAR_7DAY -> return ContentDeliveryAdvertisementCapability.LINEAR_7DAY
    }
  }
}

enum class ComscoreMediaFormat {
  FULL_CONTENT_EPISODE,
  FULL_CONTENT_MOVIE,
  FULL_CONTENT_PODCAST,
  FULL_CONTENT_GENERIC,
  PARTIAL_CONTENT_EPISODE,
  PARTIAL_CONTENT_MOVIE,
  PARTIAL_CONTENT_PODCAST,
  PARTIAL_CONTENT_GENERIC,
  PREVIEW_EPISODE,
  PREVIEW_MOVIE,
  PREVIEW_GENERIC,
  EXTRA_EPISODE,
  EXTRA_MOVIE,
  EXTRA_GENERIC;

  fun toComscore(): Int {
    when(this){
      FULL_CONTENT_EPISODE -> return ContentMediaFormat.FULL_CONTENT_EPISODE
      FULL_CONTENT_MOVIE -> return ContentMediaFormat.FULL_CONTENT_MOVIE
      FULL_CONTENT_PODCAST -> return ContentMediaFormat.FULL_CONTENT_PODCAST
      FULL_CONTENT_GENERIC -> return ContentMediaFormat.FULL_CONTENT_GENERIC
      PARTIAL_CONTENT_EPISODE -> return ContentMediaFormat.PARTIAL_CONTENT_EPISODE
      PARTIAL_CONTENT_MOVIE -> return ContentMediaFormat.PARTIAL_CONTENT_MOVIE
      PARTIAL_CONTENT_PODCAST -> return ContentMediaFormat.PARTIAL_CONTENT_PODCAST
      PARTIAL_CONTENT_GENERIC -> return ContentMediaFormat.PARTIAL_CONTENT_GENERIC
      PREVIEW_EPISODE -> return ContentMediaFormat.PREVIEW_EPISODE
      PREVIEW_MOVIE -> return ContentMediaFormat.PREVIEW_MOVIE
      PREVIEW_GENERIC -> return ContentMediaFormat.PREVIEW_GENERIC
      EXTRA_EPISODE -> return ContentMediaFormat.EXTRA_EPISODE
      EXTRA_MOVIE -> return ContentMediaFormat.EXTRA_MOVIE
      EXTRA_GENERIC -> return ContentMediaFormat.EXTRA_GENERIC
    }
  }
}

enum class ComscoreDistributionModel {
  TV_AND_ONLINE,
  EXCLUSIVELY_ONLINE;

  fun toComscore(): Int {
    when(this) {
      TV_AND_ONLINE -> return ContentDistributionModel.TV_AND_ONLINE
      EXCLUSIVELY_ONLINE -> return ContentDistributionModel.EXCLUSIVELY_ONLINE
    }
  }
}

data class ComscoreDimension(val width: Int, val height: Int)
data class ComscoreDate(val year: Int, val month: Int, val day: Int)
data class ComscoreTime(val hours: Int, val minutes: Int)


