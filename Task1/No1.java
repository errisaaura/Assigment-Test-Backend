public class No1 {

    public static void main(String[] args) {

        System.out.println("=======1A========");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println(" ");
        }

        System.out.println("=======1B========");
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5 - i; j++) {
                System.out.print("*");
            }
            System.out.println(" ");
        }

        System.out.println("=======1C========");
        for (int b = 1; b <= 5; b++) {
            for (int c = 4; c >= b; c--) {
                System.out.print(' ');
            }
            for (int d = 1; d <= b; d++) {
                System.out.print('*');
            }
            System.out.println();
        }

        System.out.println("=======1D========");
        for (int i = 1; i <= 5; i++) {
            for (int j = 5; j > i; j--) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
    }
}