// نظرية الزمر - Complete Book Content
// Part 1 + Part 2

export interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  sections: Section[];
}

export interface Section {
  id: string;
  number: string;
  title: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: 'definition' | 'theorem' | 'proof' | 'example' | 'exercise' | 'note' | 'heading' | 'paragraph' | 'math' | 'list' | 'cayley_table' | 'steps';
  title?: string;
  content?: string;
  items?: string[];
  table?: string[][];
  elements?: string[];
  operation?: string;
  steps?: Step[];
  hint?: string;
}

export interface Step {
  step: number;
  text: string;
  math?: string;
}

export const chapters: Chapter[] = [
  // ==================== PART 1 ====================
  {
    id: 'intro',
    number: 0,
    title: 'مقدمة',
    subtitle: 'المفاهيم والتعريفات الأساسية',
    sections: [
      {
        id: 'sets',
        number: '0.1',
        title: 'نظرية المجموعات',
        content: [
          { type: 'heading', title: 'المجموعات' },
          { type: 'paragraph', content: 'المجموعة هي تجمع لعناصر محددة ومنفصلة. نكتب العنصر a في المجموعة A بالرمز a ∈ A.' },
          { type: 'definition', title: 'المجموعة الخالية', content: 'المجموعة التي لا تحتوي على أي عنصر، نرمز لها بالرمز ∅.' },
          { type: 'definition', title: 'المجموعة الكلية', content: 'المجموعة التي تحتوي على جميع العناصر تحت الدراسة، نرمز لها بالرمز U.' },
          { type: 'heading', title: 'العلاقات على المجموعات' },
          { type: 'definition', title: 'علاقة الانتماء', content: 'x ∈ A تعني أن العنصر x ينتمي إلى المجموعة A. وإذا لم ينتمِ نكتب x ∉ A.' },
          { type: 'definition', title: 'علاقة التضمن', content: 'A ⊆ B تعني أن A مجموعة جزئية من B، أي أن كل عنصر في A يقع في B.' },
          { type: 'definition', title: 'تساوي المجموعتين', content: 'A = B إذا وفقط إذا A ⊆ B و B ⊆ A.' },
          { type: 'heading', title: 'العمليات على المجموعات' },
          { type: 'definition', title: 'الاتحاد', content: 'A ∪ B = {x : x ∈ A أو x ∈ B}' },
          { type: 'definition', title: 'التقاطع', content: 'A ∩ B = {x : x ∈ A و x ∈ B}' },
          { type: 'definition', title: 'الفرق', content: 'A − B = {x : x ∈ A و x ∉ B}' },
          { type: 'definition', title: 'الفرق التماثلي', content: 'A Δ B = (A − B) ∪ (B − A)' },
          { type: 'definition', title: 'الجلسية', content: 'A × B = {(x, y) : x ∈ A, y ∈ B}' },
          { type: 'heading', title: 'قوة المجموعة' },
          { type: 'definition', title: 'قوة المجموعة (Power Set)', content: 'P(A) هي مجموعة جميع المجموعات الجزئية لـ A. |P(A)| = 2^|A|.' },
        ]
      },
      {
        id: 'relations',
        number: '0.2',
        title: 'العلاقات Relations',
        content: [
          { type: 'definition', title: 'تعريف العلاقة', content: 'علاقة R من A إلى B هي مجموعة جزئية من A × B. نكتب aRb إذا كان (a,b) ∈ R.' },
          { type: 'heading', title: 'علاقة التكافؤ' },
          { type: 'definition', title: 'تعريف علاقة التكافؤ', content: 'علاقة ~ على A تسمى علاقة تكافؤ إذا حققت:' },
          { type: 'list', items: ['الانعكاسية: a ~ a لكل a ∈ A', 'التماثلية: إذا a ~ b فإن b ~ a', 'التحويزية: إذا a ~ b و b ~ c فإن a ~ c'] },
          { type: 'definition', title: 'صنف التكافؤ', content: '[x] = {y ∈ A : y ~ x} يسمى صنف تكافؤ العنصر x.' },
          { type: 'definition', title: 'مجموعة الأصناف', content: 'A/~ = {[x] : x ∈ A} تسمى مجموعة الأصناف أو تجزئة A.' },
        ]
      },
      {
        id: 'mappings',
        number: '0.3',
        title: 'المساور Mappings',
        content: [
          { type: 'definition', title: 'تعريف المسار', content: 'f: A → B مسار من A إلى B إذا ارتبط كل عنصر x ∈ A بعنصر واحد فقط y ∈ B. نكتب y = f(x).' },
          { type: 'heading', title: 'أنواع المساور' },
          { type: 'definition', title: 'المسار الشامل (Surjective)', content: 'f: A → B شامل إذا كان لكل y ∈ B يوجد x ∈ A بحيث f(x) = y.' },
          { type: 'definition', title: 'المسار الناعب (Injective)', content: 'f: A → B ناعب إذا كان: f(x₁) = f(x₂) ⇒ x₁ = x₂ لكل x₁, x₂ ∈ A.' },
          { type: 'definition', title: 'المسار المتقابل (Bijective)', content: 'f متقابل إذا كان شاملًا وناعبًا في آن واحد.' },
          { type: 'heading', title: 'تركيب المساور' },
          { type: 'definition', title: 'تعريف التركيب', content: 'إذا كان f: A → B و g: B → D، فإن g ∘ f: A → D حيث (g ∘ f)(x) = g(f(x)) لكل x ∈ A.' },
        ]
      },
      {
        id: 'binary-ops',
        number: '0.4',
        title: 'العمليات الثنائية',
        content: [
          { type: 'definition', title: 'تعريف العملية الثنائية', content: 'ليكن S مجموعة غير خالية. المسار f: S × S → S يسمى عملية ثنائية على S. نرمز للعملية بالرموز *, ⋅, +, ...' },
          { type: 'heading', title: 'أمثلة على أنظمة ثنائية' },
          { type: 'list', items: ['(ℤ, +), (ℤ, ×), (ℚ, +), (ℚ*, ×), (ℝ, +), (ℝ*, ×), (ℂ, +), (ℂ*, ×)', '(Mₙ(ℝ), *) حيث * هي ضرب المصفوفات', '(P(X), ∪), (P(X), ∩), (P(X), Δ) حيث P(X) هي قوة مجموعة X'] },
          { type: 'definition', title: 'العملية الإبدالية', content: 'العملية * على S تسمى إبدالية إذا: a * b = b * a لكل a, b ∈ S.' },
          { type: 'definition', title: 'العملية التجميعية', content: 'العملية * تسمى تجميعية إذا: (a * b) * c = a * (b * c) لكل a, b, c ∈ S.' },
          { type: 'definition', title: 'العنصر المحايد', content: 'يوجد عنصر e ∈ S يسمى العنصر المحايد إذا: a * e = e * a = a لكل a ∈ S.' },
          { type: 'definition', title: 'العنصر العاكس (المعكوس)', content: 'للعنصر a ∈ S، يوجد عنصر a⁻¹ ∈ S يسمى المعكوس إذا: a * a⁻¹ = a⁻¹ * a = e.' },
          { type: 'exercise', title: 'تمارين', content: 'أي مما يلي يشكل نظامًا ثنائيًا؟', items: ['(ℤ, *) حيث a * b = a + b + 2', '(ℤ, *) حيث a * b = a² + b²', '(ℤ, *) حيث a * b = |a - b|', '(ℚ⁺, *) حيث a * b = ab/2'] },
        ]
      }
    ]
  },
  // ==================== CHAPTER 1: GROUP CONCEPT ====================
  {
    id: 'ch1',
    number: 1,
    title: 'الفصل الأول: مفهوم الزمرة',
    subtitle: 'تعريف الزمرة وخصائصها الأساسية',
    sections: [
      {
        id: 'group-def',
        number: '1.1',
        title: 'تعريف الزمرة',
        content: [
          { type: 'definition', title: 'تعريف الزمرة (Group)', content: 'النظام الثنائي (G, *) يسمى زمرة إذا حققت العملية * الشروط التالية:' },
          { type: 'list', items: [
            'الإغلاق: a * b ∈ G لكل a, b ∈ G',
            'التجميعية: (a * b) * c = a * (b * c) لكل a, b, c ∈ G',
            'وجود العنصر المحايد: يوجد e ∈ G حيث a * e = e * a = a لكل a ∈ G',
            'وجود العنصر العاكس: لكل a ∈ G يوجد a⁻¹ ∈ G حيث a * a⁻¹ = a⁻¹ * a = e'
          ]},
          { type: 'note', title: 'ملاحظة هامة', content: 'إذا كانت العملية * إبدالية أيضًا (أي a * b = b * a)، فتسمى الزمرة إبدالية (Abelian Group) أو تبديلية.' },
          { type: 'heading', title: 'أمثلة على زمر' },
          { type: 'example', title: 'مثال 1', content: '(ℤ, +) زمرة إبدالية:', items: ['الإغلاق: n + m ∈ ℤ', 'التجميعية: (n+m)+k = n+(m+k)', 'المحايد: 0 حيث n + 0 = n', 'العاكس: −n حيث n + (−n) = 0'] },
          { type: 'example', title: 'مثال 2', content: '(ℚ*, ×) زمرة إبدالية:', items: ['الإغلاق: a × b ∈ ℚ*', 'المحايد: 1', 'العاكس: 1/a'] },
          { type: 'example', title: 'مثال 3', content: 'G = {1, −1, i, −i} مع الضرب العادي:', items: ['هذه زمرة إبدالية من الرتبة 4', 'العنصر المولد هو i حيث i¹=i, i²=−1, i³=−i, i⁴=1'] },
          { type: 'example', title: 'مثال 4', content: 'G = {a + b√2 : a, b ∈ ℤ} مع الجمع:', items: ['هذه زمرة إبدالية لانهائية'] },
          { type: 'example', title: 'مثال 5', content: '(P(X), Δ) حيث Δ هو الفرق التماثلي:', items: ['الإغلاق: A Δ B ∈ P(X)', 'المحايد: ∅ حيث A Δ ∅ = A', 'العاكس: كل عنصر عاكس لنفسه (A Δ A = ∅)'] },
          { type: 'exercise', title: 'تمارين', content: 'أثبت أن كل مما يلي زمرة:', items: ['G = GL₂(ℤ) مع ضرب المصفوفات', 'G = {z ∈ ℂ : |z| = 1} مع ضرب الأعداد المركبة'] },
        ]
      },
      {
        id: 'group-props',
        number: '1.2',
        title: 'خواص الزمرة الأساسية',
        content: [
          { type: 'theorem', title: 'نظرية 1: وحدة العنصر المحايد', content: 'في أي زمرة (G, *)، العنصر المحايد e فريد (وحيد).' },
          { type: 'proof', title: 'البرهان', content: 'لنفترض وجود عنصرين محايدين e₁ و e₂. عندها:', steps: [
            { step: 1, text: 'e₁ = e₁ * e₂ (لأن e₂ محايد)' },
            { step: 2, text: 'e₁ * e₂ = e₂ (لأن e₁ محايد)' },
            { step: 3, text: 'إذن e₁ = e₂ ∎' }
          ]},
          { type: 'theorem', title: 'نظرية 2: وحدة العنصر العاكس', content: 'في أي زمرة (G, *)، لكل عنصر a ∈ G يوجد عاكس فريد (وحيد) a⁻¹.' },
          { type: 'proof', title: 'البرهان', content: 'لنفترض أن a له عاكسان b و c:', steps: [
            { step: 1, text: 'b = b * e = b * (a * c)' },
            { step: 2, text: 'b * (a * c) = (b * a) * c = e * c = c' },
            { step: 3, text: 'إذن b = c ∎' }
          ]},
          { type: 'theorem', title: 'نظرية 3: قوانين الحذف', content: 'في زمرة (G, *)، إذا كانت a * b = a * c فإن b = c (الحذف الأيسر). وإذا كانت b * a = c * a فإن b = c (الحذف الأيمن).' },
          { type: 'proof', title: 'البرهان', content: 'لنفرض a * b = a * c:', steps: [
            { step: 1, text: 'اضرب الطرفين من اليسار بـ a⁻¹' },
            { step: 2, text: 'a⁻¹ * (a * b) = a⁻¹ * (a * c)' },
            { step: 3, text: '(a⁻¹ * a) * b = (a⁻¹ * a) * c' },
            { step: 4, text: 'e * b = e * c ⇒ b = c ∎' }
          ]},
          { type: 'theorem', title: 'نظرية 4: العنصر العاكس للحاصل', content: '(a * b)⁻¹ = b⁻¹ * a⁻¹ لكل a, b ∈ G.' },
          { type: 'proof', title: 'البرهان', content: '', steps: [
            { step: 1, text: '(a * b) * (b⁻¹ * a⁻¹) = a * (b * b⁻¹) * a⁻¹' },
            { step: 2, text: '= a * e * a⁻¹ = a * a⁻¹ = e ∎' }
          ]},
          { type: 'theorem', title: 'نظرية 5: (a⁻¹)⁻¹ = a', content: 'العنصر العاكس للعنصر العاكس هو العنصر نفسه.' },
          { type: 'theorem', title: 'نظرية 6: المعادلات في الزمرة', content: 'في أي زمرة (G, *)، المعادلتان a * x = b و y * a = b لهما حلول وحيدة: x = a⁻¹ * b و y = b * a⁻¹.' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أنه إذا كانت a² = e لكل a ∈ G، فإن G إبدالية', 'أثبت أن (a * b)⁻¹ = a⁻¹ * b⁻¹ إذا وفقط إذا كانت G إبدالية'] },
        ]
      },
      {
        id: 'element-order',
        number: '1.3',
        title: 'رتبة العنصر في الزمرة',
        content: [
          { type: 'definition', title: 'تعريف رتبة العنصر', content: 'لتكن (G, *) زمرة وليكن a ∈ G. رتبة العنصر a هي أصغر عدد صحيح موجب n حيث aⁿ = e. نرمز لها بـ o(a) = n. إذا لم يوجد such n، نقول إن رتبة a لانهائية.' },
          { type: 'example', title: 'مثال', content: 'في (ℤ₁₂, ⊕):', items: ['o([0]) = 1', 'o([1]) = 12', 'o([2]) = 6', 'o([3]) = 4', 'o([4]) = 3', 'o([6]) = 2'] },
          { type: 'theorem', title: 'نظرية', content: 'في زمرة إبدالية منتهية (G, *)، إذا كانت o(a) = m و o(b) = n و gcd(m,n) = 1، فإن o(a * b) = mn.' },
          { type: 'exercise', title: 'تمارين', items: ['جد رتبة كل عنصر في (ℤ₆, ⊕)', 'أثبت أن aⁿ = e إذا وفقط إذا o(a) | n'] },
        ]
      },
      {
        id: 'cyclic-groups',
        number: '1.4',
        title: 'الزمرة الدورية (Cyclic Group)',
        content: [
          { type: 'definition', title: 'تعريف الزمرة الدورية', content: 'الزمرة (G, *) تسمى دورية إذا وجد عنصر a ∈ G يولد كل عناصر G، أي: G = {aⁿ : n ∈ ℤ}. العنصر a يسمى مولد الزمرة.' },
          { type: 'theorem', title: 'نظرية 1', content: 'كل زمرة جزئية من زمرة دورية هي دورية.' },
          { type: 'theorem', title: 'نظرية 2', content: 'الزمرة (ℤ, +) دورية مولدة بالعنصر 1 أو −1.' },
          { type: 'theorem', title: 'نظرية 3', content: '(ℤₙ, ⊕) دورية من الرتبة n، مولدة بـ [1].' },
          { type: 'theorem', title: 'نظرية 4', content: 'كل زمرة دورية منتهية من الرتبة n متشاكلة مع (ℤₙ, ⊕). وكل زمرة دورية لانهائية متشاكلة مع (ℤ, +).' },
          { type: 'theorem', title: 'نظرية 5', content: 'في زمرة دورية منتهية من الرتبة n، o(aᵏ) = n / gcd(n, k).' },
          { type: 'example', title: 'مثال', content: 'G = {1, −1, i, −i} زمرة دورية مولدة بـ i:', items: ['i¹ = i', 'i² = −1', 'i³ = −i', 'i⁴ = 1'] },
          { type: 'exercise', title: 'تمارين', items: ['جد جميع مولدات (ℤ₁₂, ⊕)', 'أثبت أن (ℚ, +) ليست دورية'] },
        ]
      },
      {
        id: 'subgroups',
        number: '1.5',
        title: 'الزمر الجزئي (Subgroups)',
        content: [
          { type: 'definition', title: 'تعريف الزمرة الجزئية', content: 'لتكن (G, *) زمرة و H ⊆ G غير خالية. نسمي (H, *) زمرة جزئية من G، ونكتب H ≤ G، إذا كانت (H, *) زمرة.' },
          { type: 'theorem', title: 'نظرية الاختبار الأحادي (One-Step Test)', content: 'H ≤ G إذا وفقط إذا: a * b⁻¹ ∈ H لكل a, b ∈ H.' },
          { type: 'theorem', title: 'نظرية الاختبار الثنائي (Two-Step Test)', content: 'H ≤ G إذا وفقط إذا: (1) a * b ∈ H لكل a, b ∈ H، و (2) a⁻¹ ∈ H لكل a ∈ H.' },
          { type: 'theorem', title: 'نظرية الاختبار المنتهي (Finite Subgroup Test)', content: 'إذا كانت H مجموعة منتهية غير خالية مغلقة تحت العملية، فإن H ≤ G.' },
          { type: 'example', title: 'مثال 1', content: 'H = nℤ = {nk : k ∈ ℤ} ≤ (ℤ, +) لكل n ∈ ℤ.' },
          { type: 'example', title: 'مثال 2', content: 'Z(G) = {z ∈ G : z * g = g * z لكل g ∈ G} يسمى مركز الزمرة G، وهو زمرة جزئية من G.' },
          { type: 'theorem', title: 'نظرية', content: 'مركز أي زمرة (Z(G)) هو زمرة جزئية من G.' },
          { type: 'proof', title: 'البرهان', content: '', steps: [
            { step: 1, text: 'e ∈ Z(G) لأن e * g = g * e = g لكل g ∈ G' },
            { step: 2, text: 'إذا x, y ∈ Z(G)، فإن (x * y⁻¹) * g = x * y⁻¹ * g = x * g * y⁻¹ = g * x * y⁻¹ = g * (x * y⁻¹)' },
            { step: 3, text: 'إذن x * y⁻¹ ∈ Z(G) ∎' }
          ]},
          { type: 'theorem', title: 'نظرية', content: 'تقاطع زمرتين جزئيتين H₁ و H₂ من G هو زمرة جزئية من G.' },
          { type: 'note', title: 'ملاحظة', content: 'اتحاد زمرتين جزئيتين ليس بالضرورة زمرة جزئية!' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أن H = {[0], [2], [4]} زمرة جزئية من (ℤ₆, ⊕)', 'أثبت أن Z(G) = G إذا وفقط إذا كانت G إبدالية'] },
        ]
      },
      {
        id: 'lagrange',
        number: '1.6',
        title: 'نظرية لاغرانج',
        content: [
          { type: 'theorem', title: 'نظرية لاغرانج', content: 'إذا كانت G زمرة منتهية و H ≤ G، فإن |H| يقسم |G|.' },
          { type: 'definition', title: 'رتبة الزمرة', content: '|G| تسمى رتبة الزمرة (عدد عناصرها).' },
          { type: 'definition', title: 'المؤشر', content: '[G : H] = |G| / |H| يسمى مؤشر H في G.' },
          { type: 'theorem', title: 'نتيجة 1', content: 'رتبة أي عنصر a ∈ G تقسم رتبة G.' },
          { type: 'theorem', title: 'نتيجة 2', content: 'a^|G| = e لكل a ∈ G (نظرية أويلر العامة).' },
          { type: 'theorem', title: 'نتيجة 3', content: 'كل زمرة من رتبة أولية هي دورية.' },
          { type: 'proof', title: 'برهان النتيجة 3', content: '', steps: [
            { step: 1, text: 'لتكن |G| = p حيث p أولي' },
            { step: 2, text: 'خذ a ≠ e في G' },
            { step: 3, text: 'o(a) | p ⇒ o(a) = 1 أو p' },
            { step: 4, text: 'لكن a ≠ e ⇒ o(a) ≠ 1' },
            { step: 5, text: 'إذن o(a) = p ⇒ |⟨a⟩| = p = |G| ⇒ G = ⟨a⟩ ∎' }
          ]},
          { type: 'exercise', title: 'تمارين', items: ['أثبت أنه لا توجد زمرة من رتبة 0', 'جد جميع الزمر الجزئية لـ (ℤ₁₂, ⊕)'] },
        ]
      }
    ]
  },
  // ==================== CHAPTER 2: TYPES OF GROUPS ====================
  {
    id: 'ch2',
    number: 2,
    title: 'الفصل الثاني: أنواع الزمر',
    subtitle: 'زمر التبديل، زمر المحاور، الزمر الطبيعية، والزمر العاملة',
    sections: [
      {
        id: 'perm-groups',
        number: '2.1',
        title: 'زمر التبديل (Permutation Groups)',
        content: [
          { type: 'definition', title: 'تعريف التبديل', content: 'تبديل على المجموعة {1, 2, ..., n} هو مسار متقابل من المجموعة إلى نفسها. نرمز لزمرة جميع التبديلات بالرمز Sₙ.' },
          { type: 'math', content: '|Sₙ| = n!' },
          { type: 'definition', title: 'تدوير (Cycle)', content: 'التدوير (a₁ a₂ ... aₖ) يرسل a₁ إلى a₂، a₂ إلى a₃، ...، aₖ إلى a₁ ويثبت بقية العناصر.' },
          { type: 'theorem', title: 'نظرية', content: 'كل تبديل يمكن كتابته على شكل تركيب دوائر منفصلة.' },
          { type: 'definition', title: 'الإشارة (Sign) للتبديل', content: 'sgn(σ) = (+1) إذا كان σ حاصل ضرب عدد زوجي من الترانسبوزيشns، و (−1) إذا كان عددًا فرديًا.' },
          { type: 'theorem', title: 'نظرية', content: 'sgn(σ ∘ τ) = sgn(σ) · sgn(τ)' },
          { type: 'definition', title: 'زمرة التبديل الزوجية', content: 'Aₙ = {σ ∈ Sₙ : sgn(σ) = +1} تسمى زمرة التبديل الزوجية. |Aₙ| = n!/2.' },
          { type: 'theorem', title: 'نظرية', content: 'Aₙ ◅ Sₙ (زمرة طبيعية).' },
          { type: 'example', title: 'مثال: S₃', content: 'S₃ = {e, (12), (13), (23), (123), (132)}', table: [['∘', 'e', '(12)', '(13)', '(23)', '(123)', '(132)'], ['e', 'e', '(12)', '(13)', '(23)', '(123)', '(132)'], ['(12)', '(12)', 'e', '(132)', '(123)', '(23)', '(13)'], ['(13)', '(13)', '(123)', 'e', '(132)', '(12)', '(23)'], ['(23)', '(23)', '(132)', '(123)', 'e', '(13)', '(12)'], ['(123)', '(123)', '(13)', '(23)', '(12)', '(132)', 'e'], ['(132)', '(132)', '(23)', '(12)', '(13)', 'e', '(123)']] },
          { type: 'exercise', title: 'تمارين', items: ['أوجد رتبة كل عنصر في S₃', 'أثبت أن S₃ ليست إبدالية'] },
        ]
      },
      {
        id: 'cosets',
        number: '2.2',
        title: 'المجموعات المقارنة (Cosets)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'لتكن H ≤ G و a ∈ G:', items: ['الصورة اليسرى: aH = {a * h : h ∈ H}', 'الصورة اليمنى: Ha = {h * a : h ∈ H}'] },
          { type: 'theorem', title: 'خواص المجموعات المقارنة', content: '', items: ['a ∈ aH و a ∈ Ha', '|aH| = |H| = |Ha|', 'aH = H إذا a ∈ H', 'أي مجموعتين مقارنتين إما متساويتان أو متقطعتان'] },
          { type: 'theorem', title: 'نظرية', content: 'المجموعات المقارنة {aH : a ∈ G} تشكل تجزئة لـ G.' },
          { type: 'example', title: 'مثال', content: 'في G = (ℤ, +) و H = 3ℤ:', items: ['0 + H = {..., −6, −3, 0, 3, 6, ...}', '1 + H = {..., −5, −2, 1, 4, 7, ...}', '2 + H = {..., −4, −1, 2, 5, 8, ...}', 'هذه هي المجموعات المقارنة الثلاث فقط!'] },
          { type: 'exercise', title: 'تمارين', items: ['أوجد جميع المجموعات المقارنة لـ H = {e, (12)} في S₃'] },
        ]
      },
      {
        id: 'normal-subgroups',
        number: '2.3',
        title: 'الزمر الطبيعية (Normal Subgroups)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'H ≤ G تسمى زمرة طبيعية في G، ونكتب H ◅ G، إذا: gHg⁻¹ = H لكل g ∈ G. أو بشكل مكافئ: gH = Hg لكل g ∈ G.' },
          { type: 'theorem', title: 'نتائج', content: '', items: ['في زمرة إبدالية، كل زمرة جزئية طبيعية', 'H ◅ G إذا وفقط إذا ghg⁻¹ ∈ H لكل h ∈ H و g ∈ G', 'مركز Z(G) طبيعي في G'] },
          { type: 'theorem', title: 'نظرية', content: 'H ◅ G إذا وفقط إذا حاصل ضرب المجموعات المقارنة معرف جيدًا: (aH)(bH) = (ab)H.' },
          { type: 'example', title: 'مثال', content: 'Aₙ ◅ Sₙ لكل n ≥ 2.' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أن {e} ◅ G و G ◅ G دائمًا', 'أوجد جميع الزمر الطبيعية في S₃'] },
        ]
      },
      {
        id: 'quotient-groups',
        number: '2.4',
        title: 'الزمر العاملة (Quotient Groups)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'إذا كانت H ◅ G، فإن G/H = {aH : a ∈ G} مع العملية (aH)(bH) = (ab)H تسمى الزمرة العاملة (Factor Group).' },
          { type: 'theorem', title: 'نظرية', content: 'G/H زمرة بحقيقة أن H طبيعية.' },
          { type: 'theorem', title: 'نظرية', content: '|G/H| = [G : H] = |G| / |H|.' },
          { type: 'example', title: 'مثال', content: 'G = (ℤ, +) و H = 3ℤ:', items: ['ℤ/3ℤ = {0+3ℤ, 1+3ℤ, 2+3ℤ} = {([0], [1], [2]}', 'هذه الزمرة متشاكلة مع (ℤ₃, ⊕)'] },
          { type: 'example', title: 'مثال مهم', content: 'G = S₃ و H = A₃ = {e, (123), (132)}:', items: ['S₃/A₃ = {H, (12)H}', '|S₃/A₃| = 6/3 = 2', 'هذه زمرة من رتبة 2، متشاكلة مع ℤ₂'] },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أن G/G ≅ {e} و G/{e} ≅ G', 'أوجد (ℤ₁₂/⟨[4]⟩) وحدد نوعها'] },
        ]
      },
      {
        id: 'modular-arithmetic',
        number: '2.5',
        title: 'الحساب الترددي (Modular Arithmetic)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'نقول أن a متطابق مع b modulo n، ونكتب a ≡ b (mod n)، إذا كان n | (a − b).' },
          { type: 'theorem', title: 'نظرية', content: 'علاقة التطابق modulo n هي علاقة تكافؤ على ℤ.' },
          { type: 'theorem', title: 'خواص', content: 'إذا a ≡ b (mod n) و c ≡ d (mod n)، فإن:', items: ['a + c ≡ b + d (mod n)', 'a · c ≡ b · d (mod n)', 'aᵏ ≡ bᵏ (mod n) لكل k ∈ ℕ'] },
          { type: 'definition', title: 'الأعداد الصحيحة modulo n', content: 'ℤₙ = {[0], [1], ..., [n−1]} حيث [a] = {x ∈ ℤ : x ≡ a (mod n)}.' },
          { type: 'definition', title: 'الزمرة الحلقية', content: '(ℤₙ, ⊕) حيث [a] ⊕ [b] = [a + b]. هذه زمرة دورية من الرتبة n.' },
          { type: 'definition', title: 'ضرب modulo n', content: '[a] ⊗ [b] = [ab]. هذه العملية تجميعية وموزعة على الجمع.' },
          { type: 'example', title: 'مثال: (ℤ₅, ⊕)', content: '', table: [['⊕', '[0]', '[1]', '[2]', '[3]', '[4]'], ['[0]', '[0]', '[1]', '[2]', '[3]', '[4]'], ['[1]', '[1]', '[2]', '[3]', '[4]', '[0]'], ['[2]', '[2]', '[3]', '[4]', '[0]', '[1]'], ['[3]', '[3]', '[4]', '[0]', '[1]', '[2]'], ['[4]', '[4]', '[0]', '[1]', '[2]', '[3]']] },
          { type: 'exercise', title: 'تمارين', items: ['أكمل جدول (ℤ₄, ⊕) و (ℤ₄, ⊗)', 'أوجد جميع عناصر (ℤ₇*, ⊗)'] },
        ]
      }
    ]
  },
  // ==================== CHAPTER 3: HOMOMORPHISMS ====================
  {
    id: 'ch3',
    number: 3,
    title: 'الفصل الثالث: التشاكل والتماثل',
    subtitle: 'التشاكلات بين الزمر والتماثلات',
    sections: [
      {
        id: 'homomorphisms',
        number: '3.1',
        title: 'التشاكل (Homomorphisms)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'المسار φ: (G, *) → (G\', ⋆) يسمى تشاكل (Homomorphism) إذا: φ(a * b) = φ(a) ⋆ φ(b) لكل a, b ∈ G.' },
          { type: 'heading', title: 'أمثلة' },
          { type: 'example', title: 'مثال 1', content: 'φ: (ℤ, +) → (ℚ*, ×) حيث φ(x) = 2ˣ.', items: ['φ(a + b) = 2^(a+b) = 2^a · 2^b = φ(a) · φ(b) ✓'] },
          { type: 'example', title: 'مثال 2', content: 'φ: (ℤ, +) → (ℤₙ, ⊕) حيث φ(x) = [x].', items: ['φ(a + b) = [a + b] = [a] ⊕ [b] = φ(a) ⊕ φ(b) ✓'] },
          { type: 'example', title: 'مثال 3', content: 'φ: (ℝ⁺, ·) → (ℝ, +) حيث φ(x) = ln(x).', items: ['φ(a · b) = ln(ab) = ln(a) + ln(b) = φ(a) + φ(b) ✓'] },
          { type: 'definition', title: 'نواة التشاكل', content: 'Ker(φ) = {a ∈ G : φ(a) = e\'}' },
          { type: 'definition', title: 'مدى التشاكل', content: 'Im(φ) = {φ(a) : a ∈ G}' },
          { type: 'theorem', title: 'نظرية 1', content: 'Ker(φ) ◅ G (النواة زمرة طبيعية).' },
          { type: 'theorem', title: 'نظرية 2', content: 'Im(φ) ≤ G\' (المدى زمرة جزئية).' },
          { type: 'theorem', title: 'نظرية 3', content: 'φ حقن (injective) إذا وفقط إذا Ker(φ) = {e}.' },
          { type: 'theorem', title: 'نظرية 4', content: 'φ صير (surjective) إذا وفقط إذا Im(φ) = G\'.' },
          { type: 'theorem', title: 'نظرية 5', content: 'φ(e_G) = e_G\' و φ(a⁻¹) = φ(a)⁻¹.' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أن Ker(φ) ◅ G', 'إذا φ: G → G\' تشاكل، أثبت أن o(φ(a)) | o(a)'] },
        ]
      },
      {
        id: 'isomorphisms',
        number: '3.2',
        title: 'التماثل (Isomorphisms)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'التشاكل φ: G → G\' يسمى تماثل (Isomorphism) إذا كان متقالبًا (bijective). نكتب G ≅ G\'.' },
          { type: 'theorem', title: 'نظرية 1', content: 'التماثل علاقة تكافؤ:' },
          { type: 'list', items: ['G ≅ G (الانعكاسية)', 'G ≅ G\' ⇒ G\' ≅ G (التماثلية)', 'G ≅ G\' و G\' ≅ G\'\' ⇒ G ≅ G\'\' (التحويزية)'] },
          { type: 'theorem', title: 'نظرية 2', content: 'G ≅ G\' إذا وفقط إذا كان هناك مسار متقابل φ: G → G\' يحفظ العملية.' },
          { type: 'theorem', title: 'نظرية 3', content: 'كل زمرة دورية منتهية من الرتبة n متشاكلة مع (ℤₙ, ⊕).' },
          { type: 'theorem', title: 'نظرية 4', content: 'كل زمرة دورية لانهائية متشاكلة مع (ℤ, +).' },
          { type: 'theorem', title: 'نظرية 5', content: 'الزمرتان (ℝ, +) و (ℝ⁺, ·) متشاكلتان.' },
          { type: 'theorem', title: 'نظرية 6', content: 'G إبدالية إذا وفقط إذا G\' إبدالية (حيث G ≅ G\').' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أن (ℚ, +) و (ℤ, +) غير متشاكلتين', 'أثبت أن S₃ ≅ D₃ (زمرة المثلث المتساوي الأضلاع)'] },
        ]
      },
      {
        id: 'fundamental',
        number: '3.3',
        title: 'النظريات الأساسية',
        content: [
          { type: 'theorem', title: 'النظرية الأساسية الأولى للتشاكل (First Isomorphism Theorem)', content: 'إذا كان φ: G → G\' تشاكل، فإن: G/Ker(φ) ≅ Im(φ).' },
          { type: 'proof', title: 'البرهان', content: '', steps: [
            { step: 1, text: 'نعرف ψ: G/Ker(φ) → Im(φ) بـ ψ(aKer(φ)) = φ(a)' },
            { step: 2, text: 'ψ معرف جيدًا: إذا aKer(φ) = bKer(φ)، فإن b⁻¹a ∈ Ker(φ) ⇒ φ(b⁻¹a) = e\' ⇒ φ(a) = φ(b)' },
            { step: 3, text: 'ψ تشاكل: ψ(aKer(φ) · bKer(φ)) = ψ((ab)Ker(φ)) = φ(ab) = φ(a)φ(b) = ψ(aKer(φ))ψ(bKer(φ))' },
            { step: 4, text: 'ψ حقن: Ker(ψ) = {Ker(φ)} ⇒ Ker(ψ) وحدة' },
            { step: 5, text: 'ψ صير: لكل y ∈ Im(φ)، يوجد a ∈ G : φ(a) = y ⇒ ψ(aKer(φ)) = y ∎' }
          ]},
          { type: 'theorem', title: 'النظرية الأساسية الثانية (Second Isomorphism Theorem)', content: 'إذا H ≤ G و N ◅ G، فإن: H/(H∩N) ≅ HN/N.' },
          { type: 'theorem', title: 'النظرية الأساسية الثالثة (Third Isomorphism Theorem)', content: 'إذا H ◅ G و K ◅ G مع H ⊆ K، فإن: (G/H)/(K/H) ≅ G/K.' },
          { type: 'theorem', title: 'نظرية الم correspondence', content: 'إذا N ◅ G، فإن الزمر الجزئية لـ G/N تتوافق مع الزمر الجزئية لـ G التي تحتوي N.' },
          { type: 'example', title: 'مثال', content: 'φ: (ℤ, +) → (ℤₙ, ⊕) حيث φ(x) = [x]:', items: ['Ker(φ) = nℤ', 'Im(φ) = ℤₙ', 'بما أن φ صير، فإن ℤ/nℤ ≅ ℤₙ ✓'] },
          { type: 'exercise', title: 'تمارين', items: ['طبق النظرية الأساسية الأولى على φ: (ℝ, +) → (ℂ*, ×) حيث φ(x) = e^(2πix)', 'أثبت النظرية الأساسية الثانية'] },
        ]
      },
      {
        id: 'automorphisms',
        number: '3.4',
        title: 'التشاكلات الذاتية (Automorphisms)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'التماثل φ: G → G يسمى تشاكل ذاتي (Automorphism). مجموعة جميع التشاكلات الذاتية تُرمز بـ Aut(G) وهي زمرة تحت تركيب المساور.' },
          { type: 'definition', title: 'التشاكل الذاتي الداخلي', content: 'ل固定 g ∈ G، المسار φ_g(x) = gxg⁻¹ يسمى التشاكل الذاتي الداخلي.' },
          { type: 'theorem', title: 'نظرية', content: 'Inn(G) = {φ_g : g ∈ G} ◅ Aut(G).' },
          { type: 'theorem', title: 'نظرية', content: 'G/Z(G) ≅ Inn(G).' },
          { type: 'exercise', title: 'تمارين', items: ['أوجد Aut(ℤ)', 'أثبت أن Aut(ℤₙ) ≅ U(ℤₙ)'] },
        ]
      }
    ]
  },
  // ==================== PART 2: ADVANCED TOPICS ====================
  {
    id: 'ch4',
    number: 4,
    title: 'الفصل الرابع: تطبيقات متقدمة',
    subtitle: 'الزمر المباشرة، تصنيف الزمر، والتطبيقات',
    sections: [
      {
        id: 'direct-products',
        number: '4.1',
        title: 'الزمر المباشرة (Direct Products)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'لتكن G₁, G₂ زمرتين. الزمرة المباشرة G₁ × G₂ = {(g₁, g₂) : g₁ ∈ G₁, g₂ ∈ G₂} مع العملية (g₁, g₂)·(h₁, h₂) = (g₁h₁, g₂h₂).' },
          { type: 'theorem', title: 'نظرية', content: '|G₁ × G₂| = |G₁| · |G₂|.' },
          { type: 'theorem', title: 'نظرية', content: 'G₁ × G₂ إبدالية إذا وفقط إذا G₁ و G₂ إبداليتين.' },
          { type: 'theorem', title: 'نظرية', content: 'o((g₁, g₂)) = lcm(o(g₁), o(g₂)).' },
          { type: 'theorem', title: 'نظرية', content: 'ℤₘ × ℤₙ ≅ ℤ_(mn) إذا وفقط إذا gcd(m, n) = 1.' },
          { type: 'example', title: 'مثال', content: 'ℤ₂ × ℤ₂ = {(0,0), (0,1), (1,0), (1,1)}. هذه زمرة إبدالية من رتبة 4، ليست دورية!' },
          { type: 'theorem', title: 'نظرية التصنيف للزمر من رتبة p²', content: 'كل زمرة من رتبة p² (حيث p أولي) إما دورية أو متشاكلة مع ℤₚ × ℤₚ.' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أن ℤ₂ × ℤ₃ ≅ ℤ₆', 'أوجد جميع الزمر من رتبة 4'] },
        ]
      },
      {
        id: 'group-classification',
        number: '4.2',
        title: 'تصنيف الزمر منتهية الصغر',
        content: [
          { type: 'theorem', title: 'زمر من رتبة p (أولي)', content: 'كل زمرة من رتبة p أولية هي دورية، متشاكلة مع ℤₚ.' },
          { type: 'theorem', title: 'زمر من رتبة p²', content: 'كل زمرة من رتبة p² إما ≅ ℤ_(p²) أو ≅ ℤₚ × ℤₚ.' },
          { type: 'theorem', title: 'زمر من رتبة 2p', content: 'كل زمرة من رتبة 2p (p أولي فردي) إما ≅ ℤ_(2p) أو ≅ Dₚ (زمرة ثنائية السطوح).' },
          { type: 'theorem', title: 'زمر من رتبة 8', content: 'هناك 5 زمر من رتبة 8: ℤ₈, ℤ₄ × ℤ₂, ℤ₂ × ℤ₂ × ℤ₂, D₄, Q₈ (زمرة كوترنيون).' },
          { type: 'theorem', title: 'زمر من رتبة 6', content: 'هناك زمرتان من رتبة 6: ℤ₆ (إبدالية) و S₃ (غير إبدالية).' },
          { type: 'exercise', title: 'تمارين', items: ['صنف جميع الزمر من رتبة 10', 'أثبت أن هناك زمرتين فقط من رتبة 6'] },
        ]
      },
      {
        id: 'group-actions',
        number: '4.3',
        title: 'عمل الزمر (Group Actions)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'عمل الزمرة G على المجموعة X هو مسار φ: G × X → X يرمز له بـ g·x ويحقق: e·x = x و (gh)·x = g·(h·x).' },
          { type: 'definition', title: 'مدار (Orbit)', content: 'Orb(x) = {g·x : g ∈ G}.' },
          { type: 'definition', title: 'مثبت (Stabilizer)', content: 'Stab(x) = {g ∈ G : g·x = x}.' },
          { type: 'theorem', title: 'نظرية المدار-مثبت', content: '|Orb(x)| = [G : Stab(x)] = |G| / |Stab(x)|.' },
          { type: 'theorem', title: 'معادلة الصفوف', content: '|X| = Σ|Orb(xᵢ)| حيث المجموع على المدارات المختلفة.' },
          { type: 'theorem', title: 'مبرهنة كاييلي', content: 'كل زمرة من رتبة n متشاكلة مع زمرة جزئية من Sₙ.' },
          { type: 'exercise', title: 'تمارين', items: ['أثبت مبرهنة كاييلي', 'أوجد مدارات S₃ تعمل على {1,2,3}'] },
        ]
      },
      {
        id: 'sylow-theorems',
        number: '4.4',
        title: 'نظريات سيلو (Sylow Theorems)',
        content: [
          { type: 'definition', title: 'تعريف', content: 'لتكن |G| = pⁿ·m حيث gcd(p,m) = 1. الزمرة الجزئية H ≤ G من رتبة pⁿ تسمى p-زمرة سيلو لـ G.' },
          { type: 'theorem', title: 'نظرية سيلو الأولى', content: 'لتكن |G| = pⁿ·m حيث p لا يقسم m. إذن يوجد على الأقل p-زمرة سيلو واحدة.' },
          { type: 'theorem', title: 'نظرية سيلو الثانية', content: 'جميع p-زمر سيلو متزامنة (مترافقة).' },
          { type: 'theorem', title: 'نظرية سيلو الثالثة', content: 'إذا nₚ هو عدد p-زمر سيلو، فإن: nₚ | m و nₚ ≡ 1 (mod p).' },
          { type: 'example', title: 'مثال', content: '|G| = 12 = 2²·3:', items: ['n₂ | 3 و n₂ ≡ 1 (mod 2) ⇒ n₂ = 1 أو 3', 'n₃ | 4 و n₃ ≡ 1 (mod 3) ⇒ n₃ = 1 أو 4'] },
          { type: 'exercise', title: 'تمارين', items: ['أثبت أنه لا توجد زمرة بسيطة من رتبة 30', 'أوجد عدد 2-زمر و 3-زمر سيلو في S₄'] },
        ]
      }
    ]
  }
];

// Problem solver content
export interface Problem {
  id: string;
  chapter: string;
  title: string;
  statement: string;
  steps: Step[];
  hint: string;
}

export const problems: Problem[] = [
  {
    id: 'p1',
    chapter: 'ch1',
    title: 'إثبات أن (ℤ, +) زمرة',
    statement: 'أثبت أن (ℤ, +) زمرة إبدالية.',
    hint: 'تحقق من الأربعة شروط واحدًا تلو الآخر.',
    steps: [
      { step: 1, text: 'الإغلاق: إذا n, m ∈ ℤ، فإن n + m ∈ ℤ ✓' },
      { step: 2, text: 'التجميعية: (n + m) + k = n + (m + k) لكل n, m, k ∈ ℤ ✓' },
      { step: 3, text: 'المحايد: 0 ∈ ℤ و n + 0 = 0 + n = n لكل n ∈ ℤ ✓' },
      { step: 4, text: 'العاكس: لكل n ∈ ℤ، يوجد −n ∈ ℤ حيث n + (−n) = 0 ✓' },
      { step: 5, text: 'الإبدالية: n + m = m + n لكل n, m ∈ ℤ ✓' },
      { step: 6, text: 'إذن (ℤ, +) زمرة إبدالية ∎' }
    ]
  },
  {
    id: 'p2',
    chapter: 'ch1',
    title: 'إثبات أن (ℚ*, ×) زمرة',
    statement: 'أثبت أن (ℚ* = ℚ − {0}, ×) زمرة إبدالية.',
    hint: 'تذكر أن العنصر المحايد للضرب هو 1 وليس 0.',
    steps: [
      { step: 1, text: 'الإغلاق: إذا a, b ∈ ℚ*، فإن ab ∈ ℚ* (حيث ab ≠ 0) ✓' },
      { step: 2, text: 'التجميعية: (ab)c = a(bc) لكل a, b, c ∈ ℚ* ✓' },
      { step: 3, text: 'المحايد: 1 ∈ ℚ* و a × 1 = 1 × a = a لكل a ∈ ℚ* ✓' },
      { step: 4, text: 'العاكس: لكل a ∈ ℚ*، يوجد 1/a ∈ ℚ* حيث a × (1/a) = 1 ✓' },
      { step: 5, text: 'إذن (ℚ*, ×) زمرة إبدالية ∎' }
    ]
  },
  {
    id: 'p3',
    chapter: 'ch1',
    title: 'فريدية العنصر المحايد',
    statement: 'أثبت أن العنصر المحايد في أي زمرة هو فريد (وحيد).',
    hint: 'افترض وجود عنصرين محايدين e₁ و e₂ وأثبت أنهما متساويان.',
    steps: [
      { step: 1, text: 'لنفترض أن e₁ و e₂ عنصران محايدان في G' },
      { step: 2, text: 'بما أن e₂ محايد: e₁ * e₂ = e₁' },
      { step: 3, text: 'بما أن e₁ محايد: e₁ * e₂ = e₂' },
      { step: 4, text: 'إذن e₁ = e₁ * e₂ = e₂' },
      { step: 5, text: '∴ e₁ = e₂ ∎ العنصر المحايد فريد' }
    ]
  },
  {
    id: 'p4',
    chapter: 'ch1',
    title: 'فريدية العنصر العاكس',
    statement: 'أثبت أن لكل عنصر في زمرة، يوجد عنصر عاكس فريد.',
    hint: 'افترض أن للعنصر a عاكسان b و c، ثم استخدم خصائص العنصر المحايد.',
    steps: [
      { step: 1, text: 'لنفترض أن b و c عاكسان للعنصر a' },
      { step: 2, text: 'إذن: a * b = b * a = e و a * c = c * a = e' },
      { step: 3, text: 'نحسب: b = b * e = b * (a * c)' },
      { step: 4, text: 'باستخدام التجميعية: b * (a * c) = (b * a) * c = e * c = c' },
      { step: 5, text: '∴ b = c ∎ العنصر العاكس فريد' }
    ]
  },
  {
    id: 'p5',
    chapter: 'ch2',
    title: 'إثبات أن A₃ ◅ S₃',
    statement: 'أثبت أن زمرة التبديل الزوجية A₃ زمرة طبيعية في S₃.',
    hint: 'أثبت أن gA₃g⁻¹ = A₃ لكل g ∈ S₃.',
    steps: [
      { step: 1, text: 'A₃ = {e, (123), (132)} وهي زمرة جزئية من S₃' },
      { step: 2, text: '|S₃| = 6 و |A₃| = 3' },
      { step: 3, text: 'المؤشر [S₃ : A₃] = 6/3 = 2' },
      { step: 4, text: 'المجموعات المقارنة: A₃ و (12)A₃ = {(12), (13), (23)}' },
      { step: 5, text: 'لأن المؤشر = 2، فإن A₃ ◅ S₃ دائمًا ∎' }
    ]
  },
  {
    id: 'p6',
    chapter: 'ch3',
    title: 'النظرية الأساسية الأولى',
    statement: 'طبق النظرية الأساسية الأولى على φ: (ℤ, +) → (ℤₙ, ⊕) حيث φ(x) = [x].',
    hint: 'أوجد Ker(φ) ثم أثبت أن ℤ/Ker(φ) ≅ Im(φ).',
    steps: [
      { step: 1, text: 'Ker(φ) = {x ∈ ℤ : φ(x) = [0]} = {x ∈ ℤ : [x] = [0]} = nℤ' },
      { step: 2, text: 'Im(φ) = {φ(x) : x ∈ ℤ} = {[x] : x ∈ ℤ} = ℤₙ' },
      { step: 3, text: 'φ صير لأن Im(φ) = ℤₙ' },
      { step: 4, text: 'بالمبرهنة الأساسية الأولى: ℤ/Ker(φ) ≅ Im(φ)' },
      { step: 5, text: '∴ ℤ/nℤ ≅ ℤₙ ∎' }
    ]
  },
  {
    id: 'p7',
    chapter: 'ch1',
    title: 'نظرية لاغرانج',
    statement: 'إذا كانت G زمرة منتهية و H ≤ G، فأثبت أن |H| تقسم |G|.',
    hint: 'استخدم المجموعات المقارنة وحقيقة أنها تشكل تجزئة لـ G.',
    steps: [
      { step: 1, text: 'المجموعات المقارنة {aH : a ∈ G} تشكل تجزئة لـ G' },
      { step: 2, text: 'كل مجموعة مقارنة aH لها نفس عدد عناصر H، أي |aH| = |H|' },
      { step: 3, text: 'إذن |G| = r · |H| حيث r = [G : H] عدد المجموعات المقارنة' },
      { step: 4, text: '∴ |H| يقسم |G| ∎' }
    ]
  },
  {
    id: 'p8',
    chapter: 'ch3',
    title: 'إثبات أن G ≅ G\' ⇒ |G| = |G\'|',
    statement: 'أثبت أنه إذا كانت G و G\' زمرتين متشاكلتين، فإن |G| = |G\'|.',
    hint: 'تذكر أن التماثل مسار متقابل (bijective).',
    steps: [
      { step: 1, text: 'G ≅ G\' يعني وجود تماثل φ: G → G\'' },
      { step: 2, text: 'التماثل متقالب (bijective)' },
      { step: 3, text: 'بما أن φ متقابل، فإن |G| = |G\'| ∎' }
    ]
  }
];
