/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TeamsInvite {
    /** Array of emails of teammates you want to invite. */
    emails: string[];
    /** Role of invited teammate. Allowed values are: `labeler` (Studio only), `member`, or `manager`. */
    teamRole: string;
}
