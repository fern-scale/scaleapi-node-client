/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const CameraIntrinsics: core.serialization.ObjectSchema<
    serializers.CameraIntrinsics.Raw,
    Scale.CameraIntrinsics
> = core.serialization.object({
    fx: core.serialization.number().optional(),
    fy: core.serialization.number().optional(),
    cx: core.serialization.number().optional(),
    cy: core.serialization.number().optional(),
    skew: core.serialization.number().optional(),
    scalefactor: core.serialization.number().optional(),
});

export declare namespace CameraIntrinsics {
    interface Raw {
        fx?: number | null;
        fy?: number | null;
        cx?: number | null;
        cy?: number | null;
        skew?: number | null;
        scalefactor?: number | null;
    }
}
