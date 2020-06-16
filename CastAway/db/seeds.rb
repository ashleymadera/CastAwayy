# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Project.destroy_all
# Pattern.destroy_all
Admin.destroy_all

@admin = Admin.create!({ username: 'meowmeow', email: 'meow@meow.com', password: '123456'})

p "#{Admin.count} Admin(s) created"

@garter = Pattern.create!({ 
  name: "garter", 
  difficulty: "easy", 
  yarn: "Bernat Blanket", 
  needle_size: "US 19(15 mm) circular knitting needle 36'' long", 
  gauge:"5 sts and 10 rows = 4''[10cm] in garter st with 2 strands tog ", admin: @admin})

  @slipknot = Pattern.create!({ 
  name: "slipknot", 
  difficulty: "hard", 
  yarn: "Mittens", 
  needle_size: "US 19(15 mm) circular knitting needle 36'' long", 
  gauge:"5 sts and 10 rows = 4''[10cm] in garter st with 2 strands tog ", admin: @admin})

  @rib = Pattern.create!({ 
    name: "rib", 
    difficulty: "easy", 
    yarn: "1 ball Manos del Uruguay Franca (100% Superwash Merino Wool; 150g/114yds)", 
    needle_size: "US 11 (8.00mm) 16” circular or DPNs", 
    gauge:"13 sts = 4” in 1 by 1 rib, relaxed", admin: @admin})


    @pattern = Pattern.create!({ 
      name: "Pattern", 
      difficulty: "easy", 
      yarn: "Manos del Uruguay Serena (50g, approx. 170 yds; 60% baby
      alpaca, 40% pima cotton),
      2 skeins each MC and CC", 
      needle_size: "32” circular needle, US 4/3.75mm ", 
      gauge: "24 sts and 38 rows = 4”/10cm in pattern stitch", admin: @admin})
  


@Stromy = Project.create!({ admin: @admin, pattern: @garter, garment_type: "Blanket", instruction: "With 2 strands of yarn tog, cast on 60 sts.
Do not join. Working back and forth across needle in rows, proceed as follows:
Knit in rows (garter st), noting 1st row is WS, until piece from beg measures 62'' [157.5 cm] long, ending on a RS row. Cast off knitwise (WS). Abbreviations: Approx-Approximate(ly), Beg-Begin(ing), RS-Right Side, St(s)-Stitch(es), Tog-Together, WS-Wrong Side", title: 'Stormy Weather Blanket', image_url: 'https://i.imgur.com/nsKiC3Z.png'})

@Nina = Project.create!({ admin: @admin, pattern: @rib, garment_type: "Hat", instruction: "CO 50 sts. Join, being careful not to twist, and pm to show
beg of rnd.
Rnds 1-4: *K1, p1; rep from * to end of rnd.
Rnd 5: *P1, k1; rep from * to end of rnd.
Rnd 6: *K1, p1; rep from * to end of rnd.
Rnd 7: Rep Rnd 5.
Rnds 8-28: *K1, p1; rep from * to end of rnd.
Shape crown: Change to dpn when necessary.
Rnd 1: *K1, p1, k1; s2sp; (k1, p1) twice; rep from * to end of
rnd. 40 sts.
Rnds 2, 4, and 6: Work sts as they appear.
Rnd 3: *K1, p1; s2sp; p1, k1, p1; rep from * to end of rnd. 30
sts.
Rnd 5: *K1; s2sp; k1, p1; rep from * to end of rnd. 20 sts.
Rnd 7: *S2sp, p1; rep from * to end of rnd. 10 sts.
Cut yarn; thread through remaining sts and pull tight.
Make 3” pompom and attach at top.
Weave in ends.", title: 'Nina Hat', image_url: 'https://i.imgur.com/fjCnnK0.png'})

@Itty = Project.create!({ admin: @admin, pattern: @rib, garment_type: "Sock and Hat", instruction: "STITCH GUIDE
Sock Rib
(multiple of 4 sts)
Rnd 1: K1, p2, * k2, p2; rep from * to last st, k1.
Rep Rnd 1 for patt.
Hat Rib
(multiple of 4 sts)
Rnd 1: * K2, p2; rep from * to end.
Rep Rnd 1 for patt.
SOCKS
Cast on 32 (40, 48) sts. Distribute sts evenly bet
dpns, pm, and join to work in the rnd.
Cuff/Leg
Work Sock Rib until piece meas 3½ (4½, 5½)”
from cast-on edge.
Heel Flap
Note: The Heel Flap is worked over first and last 8
(10, 12) sts of the rnd. The remaining 16 (20, 24)
sts will form the Top of the Foot.
Row 1 (RS): K8 (10, 12), turn.
Row 2 (WS): P16 (20, 24), turn.
Row 3: [Sl 1, k1] 8 (10, 12) times, turn.
Row 4: Sl 1, p15 (19, 23).
Rows 5-18 (22, 26): Rep Rows 3 & 4, 7 (9, 11)
times.
Shape Heel with Short-Rows
Row 1 (RS): K9 (11, 13), ssk, k1, turn.
Row 2: Sl 1, p3, p2tog, p1, turn.
Row 3: Sl 1, k4, ssk, k1, turn.
Row 4: Sl 1, p5, p2tog, p1, turn.
Row 5: Sl 1, k6, ssk, k1, turn.
Row 6: Sl 1, p7, p2tog, p1, turn – 10 sts rem.
2-3 yr. Size Only:
Row 7: Sl 1, k8, ssk, k1, turn.
Row 8: Sl 1, p9, p2tog, p1, turn – 12 sts rem.
4-5 Year Sizes Only:
Row 7: Sl 1, k8, ssk, k1, turn.
Row 8: Sl 1, p9, p2tog, p1, turn.
Row 9: Sl 1, k10, ssk, k1, turn.
Row 10: Sl 1, p11, p2tog, p1 – 14 sts rem.
All Sizes
10 (12, 14) sts rem for Heel.
Gusset
Set-up Rnd: K5 (6, 7) Heel sts, pm to denote new
bor, k5 (6, 7) Heel sts, pick up and knit 11 (13, 15)
sts along side of Heel Flap, pm, work in est’d patt
over 16 (20, 24) Instep sts, pm, pick up and knit
11 (13, 15) sts along the other side of Heel Flap,
k5 (6, 7) (to beg of rnd) – 48 (54, 68) total sts; 32
(38, 44) Heel & Gusset sts; 16 (20, 24) Instep sts.
Dec Rnd: Knit to 3 sts bef m, k2tog, k1, work as
est’d to m, k1, ssk, knit to end – 2 sts dec’d – 44
(58, 60) sts rem.
Even Rnd: Knit to m, work as est’d to m, knit to
end.
Rep these Dec Rnd and Even Rnd, 7 (8, 9) more
times – 14 (16, 18) sts dec’d, 32 (40, 48) sts rem.
Work even as est’d until Foot meas 2 (3, 4)”, or 1
(1¼, 1½)” less than desired length.
Shape Toe
Dec Rnd: Knit to 3 sts bef m, k2tog, k1, sl m, k1,
ssk, knit to 3 sts bef m, k2tog, k1, sl m, k1, ssk,
knit to end – 4 sts dec’d, 28 (36, 44) sts rem.
Even Rnd: Knit.
Rep these 2 rnds, 4 (5, 6) more times – 12 (16,
20) sts rem. Place 6 (8, 10) Heel sts on one ndl
and 6 (8, 10) Instep sts on separate ndl, holding them parallel to one another. Graft the two sets
of sts tog using Kitchener st.
FINISHING
Block to finished measurements and weave in
ends. Fold down cuff to wear.
HAT
Cast on 88 (104, 120) sts. Distribute sts evenly
bet dpns and join to work in the rnd. Work in Hat
Rib until piece meas 4½ (5, 6)”.
Shape Crown
Rnd 1: * K2, p2, k2tog, p2; rep from * to end – 11
(13, 15) sts dec’d, 77 (91, 105) sts rem.
Rnd 2: * K2, p2, k1, p2; rep from * to end.
Rnd 3: * K2, p2tog, k1, p2; rep from * to end – 11
(13, 15) sts dec’d, 66 (78, 90) sts rem.
Rnd 4: * K2, p1, k1, p2; rep from * to end.
Rnd 5: * K2tog, p1, k1, p2; rep from * to end – 11
(13, 15) sts dec’d, 55 (65, 75) sts rem.
Rnd 6: * K1, p1, k1, p2; rep from * to end.
Rnd 7: * K1, p1, k1, p2tog; rep from * to end – 11
(13, 15) sts dec’d, 44 (52, 60) sts rem.
Rnd 8: * K1, p1; rep from * to end.
Rnd 9: * K2tog; rep from * to end – 22 (26, 30)
sts rem.
Rnd 10: * K2tog; rep from * to end – 11 (13, 15)
sts rem.
Baby only
Rnd 11: [K3tog] 3 times, k2tog – 4 sts rem.
Toddler only
Rnd 11: [K3tog] 4 times, k1 – 5 sts rem.
Rnd 12: K2tog, knit to end of round. – 4 sts rem.
Child only
Rnd 11: [K3tog] 5 times – 5 sts rem.
Rnd 12: K2tog, knit to end of round. – 4 sts rem.
All Sizes
Work in I-Cord over rem 4 sts for 4”. Bind off rem
4 sts. Tie I-Cord in a knot.", title: 'Universal Yarn Itty Bitty Set', image_url: 'https://i.imgur.com/2BL7Gbk.png'})

@Cakes = Project.create!({ admin: @admin, pattern: @garter, garment_type: "Blanket", instruction: "Begin
Cast on 4 sts.
Row 1: K2, yo, knit to end.
Repeat row 1 until 1 cake has almost
been used up. (about 170 sts on the
needle)
Next row - Begin decreasing as
follows:
K1, k2tog, yo, k2tog, knit to end.
Repeat this decrease row until 4 sts
remain.
Bind off. Weave in all ends.", title: 'Hot Cakes', image_url: 'https://i.imgur.com/ajxio2v.png'})

@Shadow = Project.create!({ admin: @admin, pattern: @pattern, garment_type: "Blanket", instruction: "With MC, cast on 5 stitches. Knit 2 rows. Join CC.
SET UP ROWS
Row 1 (CC): k2, place marker (pm), yo, pm, k1, pm, yo,
pm, k2. 7 sts.
Row 2 (CC): k2, slip marker (sm), p1, sm, k1, sm, p1, sm,
k2.
BODY
Row 1: With MC, k2, sm, yo, k to next m, yo, sm, k1, sm, yo,
k to last m, yo, sm, k2. 4 sts increased.
Row 2: With MC, k to end of row, slipping markers as you
come to them.
Row 3: With CC, k2, sm, yo, k to next m, yo, sm, k1, sm, yo,
k to last m, yo, sm, k2. 4 sts increased.
Row 4: With CC, k2, sm, p to next m, sm, k1, sm, p to last
m, sm, k2.
Rep Rows 1-4 until shawl measure 54” across the top.
Break off CC and continue with MC.
Rep Rows 1-2 five times. Bind off loosely. Weave in ends;
block lightly.", title: 'Stormy Weather Blanket', image_url: 'https://i.imgur.com/aITnGRU.png'})