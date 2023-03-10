/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.studio.batches.resetPriorities.Response.Raw,
    Scale.studio.Batch[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../../../..")).studio.Batch));

export declare namespace Response {
    type Raw = serializers.studio.Batch.Raw[];
}
