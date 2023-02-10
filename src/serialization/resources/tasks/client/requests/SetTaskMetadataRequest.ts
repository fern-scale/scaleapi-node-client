/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { ScaleApi } from "@fern-api/scale";
import * as core from "../../../../../core";

export const SetTaskMetadataRequest: core.serialization.Schema<
    serializers.SetTaskMetadataRequest.Raw,
    ScaleApi.SetTaskMetadataRequest
> = core.serialization.object({
    docs: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace SetTaskMetadataRequest {
    interface Raw {
        docs: Record<string, unknown>;
    }
}