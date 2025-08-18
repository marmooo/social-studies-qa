import { assert, assertEquals } from "jsr:@std/assert";
import { TextLineStream } from "jsr:@std/streams";

Deno.test("解答と選択肢の重複", async () => {
  const filePaths = [
    "src/data/地理語句.csv",
    "src/data/歴史語句.csv",
    "src/data/公民語句.csv",
  ];
  for (let i = 0; i < filePaths.length; i++) {
    const file = await Deno.open(filePaths[i]);
    const lineStream = file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream());
    for await (const line of lineStream) {
      const arr = line.split(",");
      const answer = arr[0];
      const choices = arr[3].split(" ");
      assert(!choices.includes(answer), line);
      assertEquals(new Set(choices).size, 10, line);
    }
  }
});
Deno.test("選択肢の数", async () => {
  const filePaths = [
    "src/data/地理語句.csv",
    "src/data/歴史語句.csv",
    "src/data/公民語句.csv",
  ];
  for (let i = 0; i < filePaths.length; i++) {
    const file = await Deno.open(filePaths[i]);
    const lineStream = file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream());
    for await (const line of lineStream) {
      const arr = line.split(",");
      const choices = arr[3].split(" ");
      assertEquals(choices.length, 10, line);
    }
  }
});
Deno.test("解答と問題文の重複", async () => {
  const filePaths = [
    "src/data/地理語句.csv",
    "src/data/歴史語句.csv",
    "src/data/公民語句.csv",
  ];
  for (let i = 0; i < filePaths.length; i++) {
    const file = await Deno.open(filePaths[i]);
    const lineStream = file.readable
      .pipeThrough(new TextDecoderStream())
      .pipeThrough(new TextLineStream());
    for await (const line of lineStream) {
      const arr = line.split(",");
      const answer = arr[0];
      const sentence = arr[2];
      assert(!sentence.includes(answer), line);
    }
  }
});
Deno.test("カテゴリ・地理語句", async () => {
  const categories = [
    "世界",
    "アジア",
    "ヨーロッパ",
    "アフリカ",
    "北アメリカ",
    "南アメリカ",
    "オセアニア",
    "日本",
    "北海道",
    "東北",
    "関東",
    "中部",
    "近畿",
    "中国・四国",
    "九州",
  ];
  const file = await Deno.open("src/data/地理語句.csv");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    const arr = line.split(",");
    const categoryRange = arr[1];
    categoryRange.split(/[〜｜]/).forEach((category) => {
      assert(categories.includes(category), line);
    });
  }
});
Deno.test("カテゴリ・歴史人物", async () => {
  const categories = [
    "縄文",
    "弥生",
    "古墳",
    "飛鳥",
    "奈良",
    "平安",
    "鎌倉",
    "室町",
    "南北朝",
    "戦国",
    "安土桃山",
    "江戸",
    "幕末",
    "明治",
    "大正",
    "昭和",
    "古代",
    "中世",
    "近世",
    "近代",
    "現代",
  ];
  const file = await Deno.open("src/data/歴史人物.csv");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    const arr = line.split(",");
    const categoryRange = arr[2];
    categoryRange.split(/[〜｜]/).forEach((category) => {
      assert(categories.includes(category), line);
    });
  }
});
Deno.test("カテゴリ・歴史語句", async () => {
  const categories = [
    "縄文",
    "弥生",
    "古墳",
    "飛鳥",
    "奈良",
    "平安",
    "鎌倉",
    "室町",
    "南北朝",
    "戦国",
    "安土桃山",
    "江戸",
    "幕末",
    "明治",
    "大正",
    "昭和",
    "先史",
    "古代",
    "中世",
    "近世",
    "近代",
    "現代",
  ];
  const file = await Deno.open("src/data/歴史語句.csv");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    const arr = line.split(",");
    const categoryRange = arr[1];
    categoryRange.split(/[〜｜]/).forEach((category) => {
      assert(categories.includes(category), line);
    });
  }
});
Deno.test("カテゴリ・公民語句", async () => {
  const categories = [
    "現代社会",
    "法",
    "政治",
    "経済",
  ];
  const file = await Deno.open("src/data/公民語句.csv");
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
    const arr = line.split(",");
    const categoryRange = arr[1];
    categoryRange.split(/[〜｜]/).forEach((category) => {
      assert(categories.includes(category), line);
    });
  }
});
