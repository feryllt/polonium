// kwin.ts - Layout engine that mimics kwin default tiling
// quite a bit smaller this time!

import { TilingEngine, EngineCapability, Client, Tile, EngineSettings } from "../engine";
import { Direction } from "../../util/geometry";

export default class KwinEngine extends TilingEngine {
    // tilesmutable moves all processing work to driver
    engineCapability =
        EngineCapability.TilesMutable | EngineCapability.UntiledByDefault;
    get engineSettings(): EngineSettings {
        return {};
    }
    set engineSettings(s: EngineSettings) {}

    buildLayout() {
        // literally nothing
        return;
    }

    addClient() {
        return;
    }

    removeClient() {
        return;
    }

    putClientInTile(client: Client, tile: Tile, _direction?: Direction) {
        tile.client = client;
    }

    regenerateLayout() {
        return;
    }
}
