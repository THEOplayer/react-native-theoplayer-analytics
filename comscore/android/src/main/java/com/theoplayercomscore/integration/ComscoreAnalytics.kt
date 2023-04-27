package com.theoplayercomscore.integration

import android.content.Context
import android.util.Log
import com.comscore.Analytics
import com.comscore.BuildConfig
import com.comscore.PublisherConfiguration
import com.theoplayer.android.api.player.Player

private const val TAG = "ComscoreConnector"

class ComscoreAnalytics {
  private var adapter: ComscoreTHEOplayerAdapter? = null
  private var startedTracking = false

  fun initialize(
    context: Context,
    configuration: ComscoreConfiguration,
    player: Player,
    playerVersion: String,
    metadata: ComscoreMetaData
  ) {
    if (startedTracking) {
      return
    }
    startedTracking = true

    if (BuildConfig.DEBUG) {
      Log.i(TAG, "initialize")
    }

    Analytics.getConfiguration().apply {
      val publisherConfiguration = PublisherConfiguration.Builder()
        .publisherId(configuration.publisherId)
        .secureTransmission(configuration.isSecureTransmission).apply {
          if (configuration.userConsent === "1" || configuration.userConsent === "0") {
            persistentLabels(hashMapOf("cs_ucfr" to configuration.userConsent))
          }
        }
        .build()

      addClient(publisherConfiguration)
      setApplicationName(configuration.applicationName)
      if (configuration.isChildDirected) {
        enableChildDirectedApplicationMode()
      }
      if (configuration.isDebug) {
        enableImplementationValidationMode()
      }
    }

    Analytics.start(context)

    adapter = ComscoreTHEOplayerAdapter(player, playerVersion, configuration, metadata)
  }

  fun reportEnd() {
    adapter?.notifyEnd()
  }

  fun reportPause() {
    adapter?.notifyPause()
  }

  fun setPersistentLabel(label: String, value: String) {
    adapter?.setPersistentLabel(label, value)
  }

  fun setPersistentLabels(labels: Map<String, String>) {
    adapter?.setPersistentLabels(labels)
  }

  fun update(metadata: ComscoreMetaData) {
    adapter?.setMedatata(metadata)
  }
}
