/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const Cuboid: core.serialization.ObjectSchema<serializers.Cuboid.Raw, Scale.Cuboid> = core.serialization.object({
    objectsToAnnotate: core.serialization.property(
        "objects_to_annotate",
        core.serialization.list(core.serialization.unknown()).optional()
    ),
    minHeight: core.serialization.property("min_height", core.serialization.number().optional()),
    minWidth: core.serialization.property("min_width", core.serialization.number().optional()),
    cameraIntrinsics: core.serialization.property(
        "camera_intrinsics",
        core.serialization.lazyObject(async () => (await import("../../..")).CameraIntrinsics).optional()
    ),
    cameraRotationQuaternion: core.serialization.property(
        "camera_rotation_quaternion",
        core.serialization.lazyObject(async () => (await import("../../..")).CameraRotationQuaternion).optional()
    ),
    cameraHeight: core.serialization.property("camera_height", core.serialization.number().optional()),
});

export declare namespace Cuboid {
    interface Raw {
        objects_to_annotate?: unknown[] | null;
        min_height?: number | null;
        min_width?: number | null;
        camera_intrinsics?: serializers.CameraIntrinsics.Raw | null;
        camera_rotation_quaternion?: serializers.CameraRotationQuaternion.Raw | null;
        camera_height?: number | null;
    }
}
