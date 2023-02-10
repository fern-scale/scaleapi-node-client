/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { ScaleApi } from "@fern-api/scale";
import * as core from "../../../../core";

export const VideoPlaybackAnnotationRequest: core.serialization.ObjectSchema<
    serializers.VideoPlaybackAnnotationRequest.Raw,
    ScaleApi.VideoPlaybackAnnotationRequest
> = core.serialization.object({
    project: core.serialization.string().optional(),
    batch: core.serialization.string().optional(),
    instruction: core.serialization.string().optional(),
    callbackUrl: core.serialization.property("callback_url", core.serialization.string().optional()),
    attachments: core.serialization.list(core.serialization.string()).optional(),
    attachment: core.serialization.string().optional(),
    attachmentType: core.serialization.property("attachment_type", core.serialization.string().optional()),
    geometries: core.serialization.lazyObject(async () => (await import("../../..")).Geometries),
    annotationAttributes: core.serialization.property(
        "annotation_attributes",
        core.serialization
            .record(
                core.serialization.string(),
                core.serialization.lazyObject(async () => (await import("../../..")).AnnotationAttribute)
            )
            .optional()
    ),
    eventsToAnnotate: core.serialization.property(
        "events_to_annotate",
        core.serialization.list(core.serialization.string()).optional()
    ),
    links: core.serialization
        .record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("../../..")).Links)
        )
        .optional(),
    frameRate: core.serialization.property("frame_rate", core.serialization.number().optional()),
    padding: core.serialization.number().optional(),
    paddingX: core.serialization.number().optional(),
    paddingY: core.serialization.number().optional(),
    hypothesis: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    baseAnnotations: core.serialization.property(
        "base_annotations",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    canAddBaseAnnotations: core.serialization.property(
        "can_add_base_annotations",
        core.serialization.boolean().optional()
    ),
    canEditBaseAnnotations: core.serialization.property(
        "can_edit_base_annotations",
        core.serialization.boolean().optional()
    ),
    canEditBaseAnnotationLabels: core.serialization.property(
        "can_edit_base_annotation_labels",
        core.serialization.boolean().optional()
    ),
    canDeleteBaseAnnotations: core.serialization.property(
        "can_delete_base_annotations",
        core.serialization.boolean().optional()
    ),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    priority: core.serialization.number().optional(),
    uniqueId: core.serialization.property("unique_id", core.serialization.string().optional()),
    clearUniqueIdOnError: core.serialization.property(
        "clear_unique_id_on_error",
        core.serialization.boolean().optional()
    ),
    tags: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace VideoPlaybackAnnotationRequest {
    interface Raw {
        project?: string | null;
        batch?: string | null;
        instruction?: string | null;
        callback_url?: string | null;
        attachments?: string[] | null;
        attachment?: string | null;
        attachment_type?: string | null;
        geometries: serializers.Geometries.Raw;
        annotation_attributes?: Record<string, serializers.AnnotationAttribute.Raw> | null;
        events_to_annotate?: string[] | null;
        links?: Record<string, serializers.Links.Raw> | null;
        frame_rate?: number | null;
        padding?: number | null;
        paddingX?: number | null;
        paddingY?: number | null;
        hypothesis?: Record<string, unknown> | null;
        base_annotations?: Record<string, unknown> | null;
        can_add_base_annotations?: boolean | null;
        can_edit_base_annotations?: boolean | null;
        can_edit_base_annotation_labels?: boolean | null;
        can_delete_base_annotations?: boolean | null;
        metadata?: Record<string, unknown> | null;
        priority?: number | null;
        unique_id?: string | null;
        clear_unique_id_on_error?: boolean | null;
        tags?: string[] | null;
    }
}