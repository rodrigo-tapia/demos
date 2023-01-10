
export interface Mappable{
  location: {
    lat: number,
    lgt: number
  };
  markerContent(): string;
  color: string;
}

export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat:0,
        lng:0
      }
    })
  }

  addMarker(mappable: Mappable): void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lgt
      }
    });

    marker.addListener('click', () =>{
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });

  }


}