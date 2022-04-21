export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ')
}

export const daysDifference = (dateString: string) => {
  let now = new Date()
  let date = new Date(dateString)
  let difference = (now.getTime() - date.getTime()) / (1000 * 3600 * 24)

  return difference
}

export const links = {
  meic: 'https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_PLANOS_ESTUDOS_VIEW?pv_plano_id=31204&pv_ano_lectivo=2021',
}
