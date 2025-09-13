import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import styles from './page.module.css';
import { getMeal } from '@/lib/meals';

type MealDetailsPageProps = {
  params: {
    mealSlug: string
  }
}

interface Meal {
  title: string,
  creator: string,
  creator_email: string,
  summary: string,
  instructions: string,
  image: string,
  slug: string
}

const MealDetailsPage = async ({ params }: MealDetailsPageProps) => {
  const { mealSlug } = await params;
  const meal: Meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions
        }}></p>
      </main>
    </>
  )
}

export default MealDetailsPage