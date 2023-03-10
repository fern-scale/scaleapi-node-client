/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const VideoPlaybackGeometries: core.serialization.ObjectSchema<
    serializers.VideoPlaybackGeometries.Raw,
    Scale.VideoPlaybackGeometries
> = core.serialization.object({
    box: core.serialization.lazyObject(async () => (await import("../../..")).ObjectsToAnnotate).optional(),
});

export declare namespace VideoPlaybackGeometries {
    interface Raw {
        box?: serializers.ObjectsToAnnotate.Raw | null;
    }
}
