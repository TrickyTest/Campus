class testprogram{
  static void test(int i=1){  // Deze setup werkt dus niet in JavaScript en wel in C# :P
    System.Console.WriteLine(i);
  }

  static void Main(){
    test();
    test(2);
    }
}
