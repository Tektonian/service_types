import { z } from "zod";
import { ReqCreateStudentReveiwSchema } from "../../zod/service/StudentReview";

// Model attribute
export interface ReqCreateStudentReveiw extends z.infer<typeof ReqCreateStudentReveiwSchema> {}

export interface ResCreateStudentReview {}

export interface ReqGetStudentReviews {
    student_id: number;
}

export interface StudentReviewData {
    consumer_id: number;
    student_id: number;
    request_id: number;
    was_late: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    was_proactive: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    was_diligent: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    commu_ability: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    lang_fluent: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    goal_fulfillment: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    want_cowork: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    praise: string;
    need_improve: string;
}
