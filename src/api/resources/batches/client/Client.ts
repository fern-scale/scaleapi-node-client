/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Scale } from "@fern-api/scale";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.ScaleEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * This is a paged endpoint for all of your batches. Batches will be returned in descending order based on `created_at`. Pagination is based off `limit` and `offset` parameters, which determine the page size and how many results to skip.
     */
    public async list(request: Scale.ListBatchesRequest = {}): Promise<Scale.BatchList> {
        const {
            project,
            status,
            startTime,
            endTime,
            completedAfter,
            completedBefore,
            auditedAfter,
            auditedBefore,
            limit,
            offset,
        } = request;
        const _queryParams = new URLSearchParams();
        if (project != null) {
            _queryParams.append("project", project);
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        if (startTime != null) {
            _queryParams.append("start_time", startTime);
        }

        if (endTime != null) {
            _queryParams.append("end_time", endTime);
        }

        if (completedAfter != null) {
            _queryParams.append("completed_after", completedAfter);
        }

        if (completedBefore != null) {
            _queryParams.append("completed_before", completedBefore);
        }

        if (auditedAfter != null) {
            _queryParams.append("audited_after", auditedAfter);
        }

        if (auditedBefore != null) {
            _queryParams.append("audited_before", auditedBefore);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (offset != null) {
            _queryParams.append("offset", offset.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ScaleEnvironment.Production, "/batches"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.BatchList.parseOrThrow(_response.body as serializers.BatchList.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new Batch within a project. Batches will be created with a status of `in_progress`. For users participating in our "Scale Rapid" Early Access, batches will be created with a status of `staging`. See the [Batch Overview](/reference/batch-overview) for additional details.
     */
    public async create(request: Scale.CreateBatchRequest): Promise<Scale.Batch> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ScaleEnvironment.Production, "/batches"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CreateBatchRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Batch.parseOrThrow(_response.body as serializers.Batch.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * For "Scale Rapid and Studio" customers only, finalizes a batch with name `batchName` so its tasks can be worked on. Non-(Rapid/Studio) customers do not need to use this endpoint - calling this endpoint will not do anything, but still return a `200` success status code.
     */
    public async finalize(batchName: string): Promise<Scale.Batch> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ScaleEnvironment.Production,
                `/batches/${batchName}/finalize`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Batch.parseOrThrow(_response.body as serializers.Batch.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint returns the details of a batch with the name `:batchName`.
     */
    public async get(batchName: string): Promise<Scale.Batch> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.ScaleEnvironment.Production, `/batches/${batchName}`),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Batch.parseOrThrow(_response.body as serializers.Batch.Raw, {
                allowUnknownKeys: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * This endpoint returns the status of a batch with the name `:batchName`, as well as the counts of its tasks grouped by task status.
     */
    public async getStatus(batchName: string): Promise<Scale.BatchStatusResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.ScaleEnvironment.Production,
                `/batches/${batchName}/status`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.BatchStatusResponse.parseOrThrow(
                _response.body as serializers.BatchStatusResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.ScaleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.ScaleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.ScaleTimeoutError();
            case "unknown":
                throw new errors.ScaleError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
