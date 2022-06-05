import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export default class Player {
    @JsonProperty({name: 'name', type: String, required: true})
    private name: string;

    public constructor(
        @JsonProperty('name') name: string,
    )
    {
        this.name = name;
    }

    public getName(): string
    {
        return this.name;
    }
}


