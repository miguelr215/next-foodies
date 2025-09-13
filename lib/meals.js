import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');
db.pragma('journal_mode = WAL');

export async function getMeals(){
    // simulate a slow database read
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return db.prepare('SELECT * FROM meals').all();
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title, { lower: true});
    meal.instructions = xss(meal.instructions);

    db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, slug)
        VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @slug
        )
    `).run(meal);
}