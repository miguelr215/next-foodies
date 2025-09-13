'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text: FormDataEntryValue | null) {
  return !text || text.toString().trim() === '';
}

export async function shareMeal(prevState, formData: FormData) {
    const meal = {
      creator: formData.get('name'),
      creator_email: formData.get('email'),
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions')
    }
    console.log(meal);

    if (
      isInvalidText(meal.creator) || 
      isInvalidText(meal.creator_email) || 
      isInvalidText(meal.title) ||
      isInvalidText(meal.summary) || 
      isInvalidText(meal.instructions) ||
      !meal.creator_email?.toString().includes('@')
      ) {
        return {
          message: 'Invalid input - please check your data'
        }
      }

    await saveMeal(meal);
    redirect('/meals');
  }