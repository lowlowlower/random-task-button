const SUPABASE_URL = 'https://urfibhtfqgffpanpsjds.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyZmliaHRmcWdmZnBhbnBzamRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3ODU2NDUsImV4cCI6MjA1MTM2MTY0NX0.Q1WPGBj23uSL3RKhYxGhs7Si1_HfrvC9P-JxkXl6eVE';
const randomTaskBtn = document.getElementById('randomTaskBtn');
const taskDisplay = document.getElementById('taskDisplay');

randomTaskBtn.addEventListener('click', async () => {
  const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); // 使用 client 变量
  const { data, error } = await client.from('随机关键词测试').select('Keyword').eq('id', 1);
  if (error) {
    console.error('获取任务失败', error);
    return;
  }
  if (data && data.length > 0) {
    const youDesiredKeyword = data[0].Keyword;
    taskDisplay.textContent = youDesiredKeyword;
    console.log('你渴望的关键词:', youDesiredKeyword);
  } else {
    console.log('你的渴望落空了，没有找到或者出错了');
  }
});