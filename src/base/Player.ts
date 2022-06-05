import { JsonObject, JsonProperty } from "typescript-json-serializer";

@JsonObject()
export default class Player {
    @JsonProperty({name: 'name', type: String, required: true})
    private name: string;

    constructor(
        @JsonProperty('name') name: string,
    )
    {
        this.name = name;
    }

    /**
     * Gets the players name
     * 
     * @returns { string } The name of the Player
     */
    public getName(): string
    {
        return this.name;
    }
}


