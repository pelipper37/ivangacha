import { JsonObject, JsonProperty } from "typescript-json-serializer";

export class Manufacturer 
{
  @JsonProperty({name: 'name', type: String, required: true})
  private name: string;

  constructor(
    @JsonProperty('name') name: string
  )
  {
    this.name = name;
  }
}

@JsonObject()
export class Car
{
  @JsonProperty({name: 'name', type: String, required: true})
  private name: string;

  @JsonProperty({name: 'manufacturer', type: Manufacturer, required: true})
  private manufacturer: Manufacturer;

  constructor(
    @JsonProperty('name') name: string,
    @JsonProperty('manufacturer') manufacturer: Manufacturer
  )
  { 
    this.name = name;
    this.manufacturer = manufacturer;
  }

  public honk()
  {
    console.log(this.name + " said screw off")
  }
}


