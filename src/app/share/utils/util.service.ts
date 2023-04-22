export class UTILService {

  public static modality: any = {
    hurto: 'Hurto',
    robo: 'Robo',
    perdida: 'Pérdida',
  }

  public static converList(objeto: any) {
    return Object.entries(objeto).map(([indice, valor]) => {
      return { value: indice, label: valor };
    });
  }

  public static getModaly(index: string) {
    return this.modality[index];
  }

}
