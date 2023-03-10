/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Scale } from "@fern-api/scale";
import * as core from "../../../../core";

export const TeamsInvite: core.serialization.ObjectSchema<serializers.TeamsInvite.Raw, Scale.TeamsInvite> =
    core.serialization.object({
        emails: core.serialization.list(core.serialization.string()),
        teamRole: core.serialization.property("team_role", core.serialization.string()),
    });

export declare namespace TeamsInvite {
    interface Raw {
        emails: string[];
        team_role: string;
    }
}
