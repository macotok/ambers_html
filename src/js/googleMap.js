export default function googleMap() {
  const latlng = new google.maps.LatLng(35.673946, 139.665906);
  const myOptions = {
    zoom: 18,/*拡大比率*/
    center: latlng,/*表示枠内の中心点*/
    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] },/*表示タイプの指定*/
    // scrollwheel: false, //スクロール禁止
    // draggable: false //ドラッグ禁止
  };
  const map = new google.maps.Map(document.getElementById('googleMap'), myOptions);
  /*アイコン設定*/
  const icon = new google.maps.MarkerImage(
    './img/icon/map.png',
    null,	//size
    null, //origin
    new google.maps.Point(100, 10), //anchor
    new google.maps.Size(116, 75)
  );
  const markerOptions = {
    position: latlng,
    map: map,
    icon: icon,
    title: 'アンバース株式会社'
  };
  const marker = new google.maps.Marker(markerOptions);
  /*取得スタイルの貼り付け*/
  const styleOptions = [
    {
      stylers: [
        { hue: '#e94709' }
      ]
    }
  ];
  const styledMapOptions = { name: 'アンバース株式会社' };
  const sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
