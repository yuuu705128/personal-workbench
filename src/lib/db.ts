import Dexie, { type EntityTable } from 'dexie'
export type GroupReview = { posts:number; merchants:number; leads:number; newMembers:number; netProfit:number }
export type MoneyLog = { allowance:number; netProfit:number; living:number; savings:number; operations:number; flexible:number }
export type DailyReview = { saved:number; reflection:string; tomorrow:string }
export type DailyLog = { date:string; completedTaskIds:string[]; groupReview?:GroupReview; money?:MoneyLog; mediaNote?:string; englishNote?:string; learnedWords?:Record<string,'known'|'review'>; extraFitness?:string[]; dailyReview?:DailyReview; weeklyLivingSaved?:boolean }
export type Setting = { key:string; value:number }
class WorkbenchDb extends Dexie { dailyLogs!:EntityTable<DailyLog,'date'>; settings!:EntityTable<Setting,'key'>; constructor(){super('personal-workbench');this.version(1).stores({dailyLogs:'date',settings:'key'})} }
export const db=new WorkbenchDb()
export async function getLog(date:string):Promise<DailyLog>{return (await db.dailyLogs.get(date))??{date,completedTaskIds:[]}}
export async function saveLog(log:DailyLog){await db.dailyLogs.put(log)}
export async function exportBackup(){return JSON.stringify({version:2,dailyLogs:await db.dailyLogs.toArray(),settings:await db.settings.toArray()},null,2)}
export async function importBackup(raw:string){const data=JSON.parse(raw) as {dailyLogs:DailyLog[];settings:Setting[]};if(!Array.isArray(data.dailyLogs)||!Array.isArray(data.settings))throw new Error('备份文件格式不正确');await db.transaction('rw',db.dailyLogs,db.settings,async()=>{await db.dailyLogs.clear();await db.settings.clear();await db.dailyLogs.bulkPut(data.dailyLogs);await db.settings.bulkPut(data.settings)})}
