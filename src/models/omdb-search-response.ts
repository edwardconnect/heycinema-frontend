import { MovieReview } from "./move-review.model";

export interface OmdbSearchResponse {
    Response?: string;
    Search?: MovieReview[];
    totalResults?: number;
}