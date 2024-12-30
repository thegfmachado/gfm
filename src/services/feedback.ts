import type { Feedback } from '@prisma/client';

import type { IFeedbackRecord } from "@/types/feedback";

const ENDPOINT = `${process.env.BASE_URL}/api/feedback`;

export class FeedbackService {
  async get(): Promise<Feedback[]> {
    try {
      const response = await fetch(ENDPOINT);

      if (!response.ok) {
        throw new Error(`Error fetching feedbacks: ${response.statusText}`);
      }

      return await response.json();

    } catch (error) {
      console.error('Error getting feedbacks:', error);
      throw error;
    }
  }

  async create(formValues: IFeedbackRecord) {
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error(`Error creating feedback: ${response.statusText}`);
      }

    } catch (error) {
      console.error('Error creating feedback:', error);
      throw error;
    }
  }
}
