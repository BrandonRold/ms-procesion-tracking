
export const diffInMinutos = ( date_init:string , date_end: string)  : number | null => {
    if (!date_init || !date_end) return null;

    const [h1, m1, s1] = date_init.split(":").map(Number);
    const [h2, m2, s2] = date_end.split(":").map(Number);

    const t1 = h1 * 3600 + m1 * 60 + s1;
    const t2 = h2 * 3600 + m2 * 60 + s2;

    return Math.abs(t2 - t1) / 60;
}

export const diffInHoras = (date_init: string, date_end: string) => {
  const diff_minutos = diffInMinutos(date_init, date_end);
  return diff_minutos !== null ? Math.floor(diff_minutos / 60) : null;
};
