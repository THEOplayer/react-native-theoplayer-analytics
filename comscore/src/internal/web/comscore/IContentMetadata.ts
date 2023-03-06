/**
 * Content metadata interface
 */
export interface IContentMetadata {
  /**
   * a collection of custom metadata name/value pair, Comscore API: addCustomLabels( Object labels )
   */
  metadata: String;
  /**
   * Live Stream Flag (mandatory for LIVE content): Specifies the asset to be a live stream.
   */
  ns_st_li: String;
  /**
   * true for LIVE, false for VOD, used for Comscore API: setMediaType( value )
   */
  isLive: boolean;
  /**
   * Classification type, mandatory, setMediaType( value )
   */
  ns_st_ct: String;
  /**
   * Program ID for VMX, unique identifier for the content, LIVE: Mandatory, VOD: Mandatory, Adv: Inherited from Content, Comscore API: setUniqueId( String id )
   */
  ns_st_ci: String;
  /**
   * Clip Length in milliseconds, Comscore API: setLength( int length )
   */
  ns_st_cl: number;
  /**
   * Channel Name, title of the station or channel for which content was recorded or where content is made available, LIVE: Mandatory,VOD: Mandatory,Adv: Inherited from Content, Comscore API: setStationTitle( String title )
   */
  ns_st_st: String;
  /**
   * Channel ID, Code of the station or channel for which content was recorded or where content is made available, LIVE: Mandatory,VOD: Mandatory,Adv: Inherited from Content, Comscore API: setStationCode( String code )
   */
  ns_st_stc: String;
  /**
   * Code to identify station affiliation in cases where the same local TV station call sign is affiliated with multiple national TV networks, Comscore API: setNetworkAffiliate( String code )
   */
  networkAffiliateCode: String;
  /**
   * ns_st_pu Publisher Brand Name, the consumer-facing brand name of the media publisher that owns the content, LIVE: Mandatory, VOD: Mandatory, Adv: Inherited from Content, Comscore API: setPublisherName( String name )
   * @type {string}
   */
  ns_st_pu: String;
  /**
   * Program name, Top level content title (i.e., the name of the overall program, show, or content series), LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setProgramTitle( String title )
   */
  ns_st_pr: String;
  /**
   * top level content ID to be used for matching and grouping purposes, LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setProgramId( String id )
   */
  ns_st_tpr: String;
  /**
   * Episode title, Sub level content title (i.e., the title of the specific episode),LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setEpisodeTitle( String title )
   */
  ns_st_ep: String;
  /**
   * Episode ID Sub level content ID to be used for matching and grouping purposes,LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setEpisodeId( String id )
   */
  ns_st_tep: String;
  /**
   * Season Number, Season number for episodic content, LIVE: Optional, VOD: Optional, Adv: Inherited from Content, Comscore API: setEpisodeSeasonNumber( String value )
   */
  ns_st_sn: String;
  /**
   * Episode number for episodic content. It is recommended to use values with 2 digits — or 3 digits for episodic content with more than 99 episodes in a season — left-padded with 0, Comscore API: setEpisodeNumber( String value )
   */
  episodeNumber: String;
  /**
   * Complete Episode Flag, 1 - if the content media is a full episode, LIVE: Optional, VOD: Optional, Adv: Inherited from Content, Comscore API: classifyAsCompleteEpisode( Boolean value )
   */
  ns_st_ce: String;
  /**
   * Genre description. Multiple values can be provided as a comma-separated string, LIVE: Optional, VOD: Optional, Adv: Inherited from Content, Comscore API: setGenreName( String name )
   */
  ns_st_ge: String;
  /**
   * Genre ID to be used for matching and grouping purposes (for example when the genres are multilingual). Multiple values can be provided as a comma-separated string, Comscore API: setGenreId( String id )
   */
  genreId: String;
  /**
   * This metadata helps Comscore differentiate if the stream is carrying the same ad load as TV, Comscore API: carryTvAdvertisementLoad( Boolean value )
   */
  carryTvAdvertisement: boolean;
  /**
   * Use value true if the content is audio-only, rather than video (with or without audio). Otherwise omit or use value false, Comscore API: classifyAsAudioStream( Boolean value)
   */
  isAudioOnly: boolean;
  /**
   * VMX dictionary (level 1), mandatory, Comscore API: setDictionaryClassificationC3( String value )
   */
  c3: String;
  /**
   * VMX dictionary (level 2), mandatory, Comscore API: setDictionaryClassificationC4( String value )
   */
  c4: String;
  /**
   * VMX dictionary (level 3), mandatory, Comscore API: setDictionaryClassificationC6( String value )
   */
  c6: String;
  /**
   * Time of initial broadcast, The date on which the content was produced or created,  LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setTimeOfTvAiring( int year, int month, int day ), setTimeOfProduction( int hours, int minutes )
   */
  ns_st_tm: String;
  /**
   * TV Air date The date on which the content aired on TV, LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setDateOfTvAiring( int year, int month, int day ), setTimeOfTvAiring( int hours, int minutes )
   */
  ns_st_tdt: String;
  /**
   * Digital Air Date, The date on which the content was made available for streaming consumption, LIVE: Optional,VOD: Optional,Adv: Inherited from Content, Comscore API: setDateOfDigitalAiring( int year, int month, int day ), setTimeOfDigitalAiring( int hours, int minutes )
   */
  ns_st_ddt: String;
  /**
   * Specify the type of feed provided on the live stream, Comscore API: setFeedType( value )
   */
  feedType: String;
  /**
   * true to set delivery mode, Comscore API:  setDeliveryMode( value )
   */
  setDeliveryMode: String;
  /**
   * Identifies the type of subscription of the user, Comscore API: setDeliverySubscriptionType( value )
   */
  deliverySubscriptionType: String;
  /**
   * Indicates whether or not ads are delivered as part of the content stream, Comscore API: setDeliveryComposition( value )
   */
  deliveryComposition: String;
  /**
   * Indicate what capability is allowed for advertisement placements, Comscore API: setDeliveryAdvertisementCapability( value )
   */
  deliveryAdvertisementCapability: String;
  /**
   *  Content Media Type, VOD: Mandatory, Adv: Inherited from Content, Specify the type of content media in more detail, Comscore API: setMediaFormat( value )
   */
  ns_st_cmt: String;
  /**
   * Content Distribution Model, Specify where the content was distributed, LIVE: Optional, VOD: Optional, Adv: Inherited from Content, Comscore API: setDistributionModel( value )
   */
  ns_st_cdm: String;
  /**
   * Can be used if the player offers the media as part of a playlist. Specify an identifier (title, etc.) for the playlist. For example, the TV Show title for a playlist which contains all episodes from a specific TV show, Comscore API: setPlaylistTitle( String title )
   */
  playlistTitle: String;
  /**
   * Indicates the total number of segments of the content, which is one more than the number of mid-roll ad breaks. For example, content with no mid-roll ad breaks has 1 segment and content with 2 mid-roll ad breaks has 3 segments, Comscore API: setTotalSegments( int total )
   */
  totalSegment: number;
  /**
   * The URL (or path/filename) of the content stream, Comscore API: setClipUrl( String url )
   */
  clipUrl: String;
  /**
   * Content video width in pixels, Comscore API: setVideoDimensions( int pixelsWide, int pixelsHigh )
   */
  pixelsWide: number;
  /**
   * Content video height in pixels, Comscore API: setVideoDimensions( int pixelsWide, int pixelsHigh )
   */
  pixelsHigh: number;
  /**
   * On Demand Type (vod / catch_up), LIVE: *null, VOD: Mandatory, Adv: Inherited from Content
   */
  oce_odt: String;
  /**
   * Broadcaster Platform, LIVE: Mandatory, VOD: Mandatory, Adv: Mandatory
   */
  oce_bpf: String;
  /**
   * Content additional description (especially for clips), LIVE: Optional, VOD: Mandatory, Adv: Inherited from Content
   */
  oce_ctl: String;
  /**
   * Distribution Mode ID, LIVE: Optional, VOD: Optional, Adv: Optional
   */
  oce_emb: String;
  /**
   * Audience Measurement Project, LIVE: Mandatory, VOD: Mandatory, Adv: Mandatory
   */
  cs_proid: String;
  /**
   *
   */
  name: String;
}