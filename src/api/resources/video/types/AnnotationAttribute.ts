/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AnnotationAttribute {
    /** attribute types: category, number, angle, text, x_line, y_line, linked */
    type?: string;
    /** a human-readable string describing the attribute to a labeler. */
    description?: string;
    /** a list of strings corresponding to the categorical choices. */
    choices?: string;
}
