#!/bin/bash
BASE="/Users/tucheyu/Desktop/ScottyDog/Org/Lunar Gala/2026/public/photos"

# Function to normalize position to folder name (kebab-case)
normalize() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ & /-/g' | sed 's/ /-/g'
}

# Function to find photo file for a person name
# Handles variations: "Name.jpg", "Name-1.jpg", "Name_Something.jpg", "Name.jpg.jpg"
find_photo() {
  local name="$1"
  local dest_dir="$2"
  
  # Try exact match first
  if [ -f "$BASE/$name.jpg" ]; then
    cp "$BASE/$name.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $name.jpg"
    return
  fi
  
  # Try .jpg.jpg (double extension bug)
  if [ -f "$BASE/$name.jpg.jpg" ]; then
    cp "$BASE/$name.jpg.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $name.jpg.jpg -> $name.jpg"
    return
  fi
  
  # Try with -1 suffix
  if [ -f "$BASE/$name-1.jpg" ]; then
    cp "$BASE/$name-1.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $name-1.jpg -> $name.jpg"
    return
  fi
  
  # Try with underscores instead of spaces
  local underscore_name=$(echo "$name" | sed 's/ /_/g')
  if [ -f "$BASE/$underscore_name.jpg" ]; then
    cp "$BASE/$underscore_name.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $underscore_name.jpg -> $name.jpg"
    return
  fi
  
  # Try with hyphen instead of spaces
  local hyphen_name=$(echo "$name" | sed 's/ /-/g')
  if [ -f "$BASE/$hyphen_name.jpg" ]; then
    cp "$BASE/$hyphen_name.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $hyphen_name.jpg -> $name.jpg"
    return
  fi
  
  # Special cases
  case "$name" in
    "Räyya Gracy")
      if [ -f "$BASE/Rayya Gracie.jpg" ]; then
        cp "$BASE/Rayya Gracie.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Rayya Gracie.jpg -> $name.jpg"
        return
      fi
      ;;
    "Lailai Zhang")
      if [ -f "$BASE/LaiLai Zhang.jpg" ]; then
        cp "$BASE/LaiLai Zhang.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: LaiLai Zhang.jpg -> $name.jpg"
        return
      fi
      ;;
    "Annissa Gao")
      if [ -f "$BASE/Annissa Gao.jpg" ]; then
        cp "$BASE/Annissa Gao.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Annissa Gao.jpg -> $name.jpg"
        return
      fi
      ;;
    "Sara Egan")
      if [ -f "$BASE/Sara Egan2.jpg" ]; then
        cp "$BASE/Sara Egan2.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Sara Egan2.jpg -> $name.jpg"
        return
      fi
      ;;
    "Tianze Zhou")
      if [ -f "$BASE/Tian Zhou.jpg" ]; then
        cp "$BASE/Tian Zhou.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Tian Zhou.jpg -> $name.jpg"
        return
      fi
      ;;
    "Naza Monjur")
      if [ -f "$BASE/Naza Monjur-1.jpg" ]; then
        cp "$BASE/Naza Monjur-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Naza Monjur-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Emma Zhao")
      if [ -f "$BASE/Emma Zhao-1.jpg" ]; then
        cp "$BASE/Emma Zhao-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Emma Zhao-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Rouzhi Wang")
      if [ -f "$BASE/Rouzhi Wang.jpg.jpg" ]; then
        cp "$BASE/Rouzhi Wang.jpg.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Rouzhi Wang.jpg.jpg -> $name.jpg"
        return
      fi
      ;;
    "Kyle Luo")
      if [ -f "$BASE/Kyle_Luo.jpg.jpg" ]; then
        cp "$BASE/Kyle_Luo.jpg.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Kyle_Luo.jpg.jpg -> $name.jpg"
        return
      fi
      ;;
    "Yui Ishibiki")
      if [ -f "$BASE/Yui Ishibiki.jpg.jpg" ]; then
        cp "$BASE/Yui Ishibiki.jpg.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Yui Ishibiki.jpg.jpg -> $name.jpg"
        return
      fi
      ;;
    "Winn Sermkitpisahn")
      if [ -f "$BASE/Winn_Sermkitpisahn.jpg" ]; then
        cp "$BASE/Winn_Sermkitpisahn.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Winn_Sermkitpisahn.jpg -> $name.jpg"
        return
      fi
      ;;
    "Xiao Yuan")
      if [ -f "$BASE/Xiao_Yuan.jpg" ]; then
        cp "$BASE/Xiao_Yuan.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Xiao_Yuan.jpg -> $name.jpg"
        return
      fi
      ;;
    "Daniel Rios")
      if [ -f "$BASE/Daniel_Rios.jpg" ]; then
        cp "$BASE/Daniel_Rios.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Daniel_Rios.jpg -> $name.jpg"
        return
      fi
      ;;
    "Lilly Song")
      if [ -f "$BASE/Lilly_Song.jpg" ]; then
        cp "$BASE/Lilly_Song.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Lilly_Song.jpg -> $name.jpg"
        return
      fi
      ;;
    "Annie Marcelino")
      if [ -f "$BASE/Annie Marcelino-1.jpg" ]; then
        cp "$BASE/Annie Marcelino-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Annie Marcelino-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Stella Yang")
      if [ -f "$BASE/Stella Yang-1.jpg" ]; then
        cp "$BASE/Stella Yang-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Stella Yang-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Sulli Yatabe")
      if [ -f "$BASE/Sulli Yatabe-1.jpg" ]; then
        cp "$BASE/Sulli Yatabe-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Sulli Yatabe-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Sydney Lee")
      if [ -f "$BASE/Sydney-Lee.jpg" ]; then
        cp "$BASE/Sydney-Lee.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Sydney-Lee.jpg -> $name.jpg"
        return
      fi
      ;;
    "Melissa Qin")
      if [ -f "$BASE/Melissa-Qin.jpg" ]; then
        cp "$BASE/Melissa-Qin.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Melissa-Qin.jpg -> $name.jpg"
        return
      fi
      ;;
    "Tim Kim")
      if [ -f "$BASE/Tim Kim-1.jpg" ]; then
        cp "$BASE/Tim Kim-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Tim Kim-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Vicky Chen")
      if [ -f "$BASE/Vicky Chen-1.jpg" ]; then
        cp "$BASE/Vicky Chen-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Vicky Chen-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Maddy Chen")
      if [ -f "$BASE/Maddy Chen-1.jpg" ]; then
        cp "$BASE/Maddy Chen-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Maddy Chen-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Isha Patel")
      if [ -f "$BASE/Isha Patel-1.jpg" ]; then
        cp "$BASE/Isha Patel-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Isha Patel-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Harshitha Bharghava")
      if [ -f "$BASE/Harshitha Bharghava .jpg" ]; then
        cp "$BASE/Harshitha Bharghava .jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Harshitha Bharghava .jpg -> $name.jpg"
        return
      fi
      ;;
  esac
  
  echo "  MISSING: $name"
}

# Function to process a category
process() {
  local category="$1"
  local name="$2"
  local position="$3"
  
  local pos_folder=$(normalize "$position")
  local dest_dir="$BASE/$category/$pos_folder"
  
  mkdir -p "$dest_dir"
  find_photo "$name" "$dest_dir"
}

echo "=== Organizing photos ==="
echo ""

# Exec
echo "--- Exec ---"
process exec "Katherine Wang" "Producer"
process exec "Yui Ishibiki" "Producer"
process exec "Garrett Lee" "Creative Director"
process exec "Michele Hratko" "Creative Director"
process exec "Mikayla Gee" "Design"
process exec "Destini Brown-Greene" "Model"
process exec "Marissa Fernandez" "Model"
process exec "Erin Hsu" "Production"
process exec "Räyya Gracy" "Production"
process exec "Advika Vuppala" "Hair & Makeup"
process exec "Vahini Walia" "Hair & Makeup"
process exec "Alycen Kim" "PR"
process exec "Stephanie Kim" "PR"
process exec "Aziza Norkulova" "Finance"

# Creative
echo ""
echo "--- Creative ---"
process creative "Garrett Lee" "Creative Director"
process creative "Michele Hratko" "Creative Director"
process creative "Melissa Qin" "Head of Print"
process creative "Sonya He" "Head of Print"
process creative "Deeptika Mandha" "Head of Motion"
process creative "Isabel Fleck" "Head of Motion"
process creative "Joy Leung" "Head of Set Design"
process creative "Yuktha Vemula" "Head of Set Design"
process creative "Serena Cai" "Head of Web"
process creative "Chieri Nnadozie" "Head of Photography"
process creative "Erin Hsu" "Head of Photography"
process creative "Erik Jiang" "Head of Cinematography"
process creative "Maddy Chen" "Head of Cinematography"
process creative "Amy Choi" "Print"
process creative "Audrey Zhao" "Print"
process creative "Cindy Tso" "Print"
process creative "Daniel Rios" "Print"
process creative "Maddie Philhower" "Print"
process creative "Sara Egan" "Print"
process creative "Jaden Scutero" "Motion"
process creative "Kai Okorodudu" "Motion"
process creative "Kyle Luo" "Motion"
process creative "Lailai Zhang" "Motion"
process creative "Rebecca Rotenberg" "Motion"
process creative "Shienka Martinez" "Motion"
process creative "Viviana Staicu" "Motion"
process creative "Xiao Yuan" "Motion"
process creative "Yutong Zhen" "Motion"
process creative "Amanda Qian" "Set Design"
process creative "Ava Han" "Set Design"
process creative "Bailey Ye" "Set Design"
process creative "Celina Poon" "Set Design"
process creative "Colleen Zhang" "Set Design"
process creative "Gabriela Romanelli" "Set Design"
process creative "Isa Paez-Pumar" "Set Design"
process creative "Julia Kasper" "Set Design"
process creative "Lillian Ren" "Set Design"
process creative "Renee Lin" "Set Design"
process creative "Russell Sang" "Set Design"
process creative "Saylor Frankel" "Set Design"
process creative "Stella Yang" "Set Design"
process creative "Bill Guo" "Web"
process creative "Brendon Lin" "Web"
process creative "Cheyu Tu" "Web"
process creative "Cody Lejang" "Web"
process creative "Jason Asiedu" "Web"
process creative "Jean Chen" "Web"
process creative "Lily Qin" "Web"
process creative "Yelim Kim" "Web"
process creative "AC Munger" "Photography"
process creative "Annie Zhang" "Photography"
process creative "Aren Framil" "Photography"
process creative "Chloe Lee" "Photography"
process creative "Claire Su" "Photography"
process creative "Coda Camaya" "Photography"
process creative "Eric Jiang" "Photography"
process creative "Grace Tang" "Photography"
process creative "Joy Ji" "Photography"
process creative "Lauren Cho" "Photography"
process creative "Maddy Ng" "Photography"
process creative "May Zhang" "Photography"
process creative "Yiwen Jiang" "Photography"
process creative "Chloe Lee" "Cinematography"
process creative "Daniel Mrsic" "Cinematography"
process creative "Leeloo Boublil" "Cinematography"
process creative "Mano Rajesh" "Cinematography"

# Design
echo ""
echo "--- Design ---"
process design "Mikayla Gee" "Head of Design"
process design "Aziza Norkulova" "Design Coordinator"
process design "Jason Asiedu" "Design Coordinator"
process design "Nataniella Essang" "Design Coordinator"
process design "Allen Chen" "Designer"
process design "Amy Cha" "Designer"
process design "Annie Marcelino" "Designer"
process design "Annissa Gao" "Designer"
process design "Ashley Dai" "Designer"
process design "Ashley Park" "Designer"
process design "Cara Moe" "Designer"
process design "Catherine Li" "Designer"
process design "Esther Lin" "Designer"
process design "Farah Daveau" "Designer"
process design "Frank Liu" "Designer"
process design "Jada Cho" "Designer"
process design "Jules Kwon" "Designer"
process design "Milada Kweon" "Designer"
process design "Nate Neira" "Designer"
process design "Raj Methi" "Designer"
process design "Sadie Han" "Designer"
process design "Sulli Yatabe" "Designer"
process design "Sydney Lee" "Designer"
process design "Tianze Zhou" "Designer"
process design "Yubo Zhang" "Designer"
process design "Zachary Yoshida" "Designer"

# Production
echo ""
echo "--- Production ---"
process production "Erin Hsu" "Head of Production"
process production "Räyya Gracy" "Head of Production"
process production "Katherine Wang" "Head of Sound Design"
process production "Lydia Synn Box" "Head of Box Office"
process production "Yujin Lee" "Head of Livestream"
process production "Hannah Chen" "Stage Manager"
process production "Jioh Kim" "Stage Manager"
process production "JP Evans" "Stage Manager"
process production "Payton Larson" "Stage Manager"
process production "Charles Chen" "Sound Designer"
process production "Jungho Chang" "Sound Designer"
process production "Rowan Sullivan" "Sound Designer"
process production "Ryan Zhang" "Sound Designer"
process production "Samyukta Athreya" "Sound Designer"
process production "Sean Xue" "Sound Designer"
process production "Vicky Yan" "Sound Designer"
process production "Winn Sermkitpisahn" "Sound Designer"
process production "Woody Li" "Sound Designer"
process production "Rithanya Senthilvel" "Production Hand"
process production "Harshitha Bharghava" "Lighting Designer"
process production "Sophie Ding" "Lighting Designer"
process production "Brandon Marcial" "Box Office Team"
process production "Guanyi Zhao" "Box Office Team"
process production "Isha Patel" "Box Office Team"
process production "Ivy Wang" "Box Office Team"
process production "Sierra Dickert" "Box Office Team"
process production "Ava Han" "Livestream"
process production "Helen Fu" "Livestream"
process production "Ishaan Singh" "Livestream"
process production "Leeloo Boublil" "Livestream"

# Model
echo ""
echo "--- Model ---"
process model "Destini Brown-Greene" "Head of Model"
process model "Marissa Fernandez" "Head of Model"
process model "Tim Kim" "Model Coordinator"
process model "Vicky Yan" "Model Coordinator"
process model "Abhay Kadambi" "Model"
process model "Ahri Guity" "Model"
process model "Deeptika Mandha" "Model"
process model "Emma DiPrima" "Model"
process model "Frank Liu" "Model"
process model "Joyce Lam" "Model"
process model "Katherine Wang" "Model"
process model "Luke Wang" "Model"
process model "Nshera Boateng" "Model"
process model "Rouzhi Wang" "Model"
process model "Safiya Stewart" "Model"
process model "Serena Luo" "Model"
process model "Sofia Pfaltzgraff" "Model"
process model "Sofia Saab" "Model"
process model "Yara Samad" "Model"

# Hair & Makeup
echo ""
echo "--- Hair & Makeup ---"
process hairmakeup "Advika Vuppala" "Head"
process hairmakeup "Vahini Walia" "Head"
process hairmakeup "Alyssa Kwon" "Artist"
process hairmakeup "Annika Kuhl" "Artist"
process hairmakeup "Ashanti Ramirez" "Artist"
process hairmakeup "Emma Zhao" "Artist"
process hairmakeup "Harshini Kotaru" "Artist"
process hairmakeup "Naza Monjur" "Artist"
process hairmakeup "Zaina Saif" "Artist"

# PR
echo ""
echo "--- PR ---"
process pr "Alycen Kim" "Head of PR"
process pr "Stephanie Kim" "Head of PR"
process pr "Cassie May" "Subhead"
process pr "Olivia Acquaah-Harrison" "Subhead"
process pr "Harshini Kotaru" "PR Team"
process pr "Ishaan Singh" "PR Team"
process pr "Lilly Song" "PR Team"
process pr "Lydia Synn" "PR Team"
process pr "Manasa Karthik" "PR Team"
process pr "Riya Kinny" "PR Team"
process pr "Sofia Chen" "PR Team"
process pr "Vicky Chen" "PR Team"
process pr "Vivian Nam" "PR Team"

echo ""
echo "=== Done! ==="

#!/bin/bash
BASE="/Users/tucheyu/Desktop/ScottyDog/Org/Lunar Gala/2026/public/photos"

# Function to normalize position to folder name (kebab-case)
normalize() {
  echo "$1" | tr '[:upper:]' '[:lower:]' | sed 's/ & /-/g' | sed 's/ /-/g'
}

# Function to find photo file for a person name
# Handles variations: "Name.jpg", "Name-1.jpg", "Name_Something.jpg", "Name.jpg.jpg"
find_photo() {
  local name="$1"
  local dest_dir="$2"
  
  # Try exact match first
  if [ -f "$BASE/$name.jpg" ]; then
    cp "$BASE/$name.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $name.jpg"
    return
  fi
  
  # Try .jpg.jpg (double extension bug)
  if [ -f "$BASE/$name.jpg.jpg" ]; then
    cp "$BASE/$name.jpg.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $name.jpg.jpg -> $name.jpg"
    return
  fi
  
  # Try with -1 suffix
  if [ -f "$BASE/$name-1.jpg" ]; then
    cp "$BASE/$name-1.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $name-1.jpg -> $name.jpg"
    return
  fi
  
  # Try with underscores instead of spaces
  local underscore_name=$(echo "$name" | sed 's/ /_/g')
  if [ -f "$BASE/$underscore_name.jpg" ]; then
    cp "$BASE/$underscore_name.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $underscore_name.jpg -> $name.jpg"
    return
  fi
  
  # Try with hyphen instead of spaces
  local hyphen_name=$(echo "$name" | sed 's/ /-/g')
  if [ -f "$BASE/$hyphen_name.jpg" ]; then
    cp "$BASE/$hyphen_name.jpg" "$dest_dir/$name.jpg"
    echo "  Copied: $hyphen_name.jpg -> $name.jpg"
    return
  fi
  
  # Special cases
  case "$name" in
    "Räyya Gracy")
      if [ -f "$BASE/Rayya Gracie.jpg" ]; then
        cp "$BASE/Rayya Gracie.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Rayya Gracie.jpg -> $name.jpg"
        return
      fi
      ;;
    "Lailai Zhang")
      if [ -f "$BASE/LaiLai Zhang.jpg" ]; then
        cp "$BASE/LaiLai Zhang.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: LaiLai Zhang.jpg -> $name.jpg"
        return
      fi
      ;;
    "Annissa Gao")
      if [ -f "$BASE/Annissa Gao.jpg" ]; then
        cp "$BASE/Annissa Gao.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Annissa Gao.jpg -> $name.jpg"
        return
      fi
      ;;
    "Sara Egan")
      if [ -f "$BASE/Sara Egan2.jpg" ]; then
        cp "$BASE/Sara Egan2.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Sara Egan2.jpg -> $name.jpg"
        return
      fi
      ;;
    "Tianze Zhou")
      if [ -f "$BASE/Tian Zhou.jpg" ]; then
        cp "$BASE/Tian Zhou.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Tian Zhou.jpg -> $name.jpg"
        return
      fi
      ;;
    "Naza Monjur")
      if [ -f "$BASE/Naza Monjur-1.jpg" ]; then
        cp "$BASE/Naza Monjur-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Naza Monjur-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Emma Zhao")
      if [ -f "$BASE/Emma Zhao-1.jpg" ]; then
        cp "$BASE/Emma Zhao-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Emma Zhao-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Rouzhi Wang")
      if [ -f "$BASE/Rouzhi Wang.jpg.jpg" ]; then
        cp "$BASE/Rouzhi Wang.jpg.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Rouzhi Wang.jpg.jpg -> $name.jpg"
        return
      fi
      ;;
    "Kyle Luo")
      if [ -f "$BASE/Kyle_Luo.jpg.jpg" ]; then
        cp "$BASE/Kyle_Luo.jpg.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Kyle_Luo.jpg.jpg -> $name.jpg"
        return
      fi
      ;;
    "Yui Ishibiki")
      if [ -f "$BASE/Yui Ishibiki.jpg.jpg" ]; then
        cp "$BASE/Yui Ishibiki.jpg.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Yui Ishibiki.jpg.jpg -> $name.jpg"
        return
      fi
      ;;
    "Winn Sermkitpisahn")
      if [ -f "$BASE/Winn_Sermkitpisahn.jpg" ]; then
        cp "$BASE/Winn_Sermkitpisahn.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Winn_Sermkitpisahn.jpg -> $name.jpg"
        return
      fi
      ;;
    "Xiao Yuan")
      if [ -f "$BASE/Xiao_Yuan.jpg" ]; then
        cp "$BASE/Xiao_Yuan.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Xiao_Yuan.jpg -> $name.jpg"
        return
      fi
      ;;
    "Daniel Rios")
      if [ -f "$BASE/Daniel_Rios.jpg" ]; then
        cp "$BASE/Daniel_Rios.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Daniel_Rios.jpg -> $name.jpg"
        return
      fi
      ;;
    "Lilly Song")
      if [ -f "$BASE/Lilly_Song.jpg" ]; then
        cp "$BASE/Lilly_Song.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Lilly_Song.jpg -> $name.jpg"
        return
      fi
      ;;
    "Annie Marcelino")
      if [ -f "$BASE/Annie Marcelino-1.jpg" ]; then
        cp "$BASE/Annie Marcelino-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Annie Marcelino-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Stella Yang")
      if [ -f "$BASE/Stella Yang-1.jpg" ]; then
        cp "$BASE/Stella Yang-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Stella Yang-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Sulli Yatabe")
      if [ -f "$BASE/Sulli Yatabe-1.jpg" ]; then
        cp "$BASE/Sulli Yatabe-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Sulli Yatabe-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Sydney Lee")
      if [ -f "$BASE/Sydney-Lee.jpg" ]; then
        cp "$BASE/Sydney-Lee.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Sydney-Lee.jpg -> $name.jpg"
        return
      fi
      ;;
    "Melissa Qin")
      if [ -f "$BASE/Melissa-Qin.jpg" ]; then
        cp "$BASE/Melissa-Qin.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Melissa-Qin.jpg -> $name.jpg"
        return
      fi
      ;;
    "Tim Kim")
      if [ -f "$BASE/Tim Kim-1.jpg" ]; then
        cp "$BASE/Tim Kim-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Tim Kim-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Vicky Chen")
      if [ -f "$BASE/Vicky Chen-1.jpg" ]; then
        cp "$BASE/Vicky Chen-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Vicky Chen-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Maddy Chen")
      if [ -f "$BASE/Maddy Chen-1.jpg" ]; then
        cp "$BASE/Maddy Chen-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Maddy Chen-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Isha Patel")
      if [ -f "$BASE/Isha Patel-1.jpg" ]; then
        cp "$BASE/Isha Patel-1.jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Isha Patel-1.jpg -> $name.jpg"
        return
      fi
      ;;
    "Harshitha Bharghava")
      if [ -f "$BASE/Harshitha Bharghava .jpg" ]; then
        cp "$BASE/Harshitha Bharghava .jpg" "$dest_dir/$name.jpg"
        echo "  Copied: Harshitha Bharghava .jpg -> $name.jpg"
        return
      fi
      ;;
  esac
  
  echo "  MISSING: $name"
}

# Function to process a category
process() {
  local category="$1"
  local name="$2"
  local position="$3"
  
  local pos_folder=$(normalize "$position")
  local dest_dir="$BASE/$category/$pos_folder"
  
  mkdir -p "$dest_dir"
  find_photo "$name" "$dest_dir"
}

echo "=== Organizing photos ==="
echo ""

# Exec
echo "--- Exec ---"
process exec "Katherine Wang" "Producer"
process exec "Yui Ishibiki" "Producer"
process exec "Garrett Lee" "Creative Director"
process exec "Michele Hratko" "Creative Director"
process exec "Mikayla Gee" "Design"
process exec "Destini Brown-Greene" "Model"
process exec "Marissa Fernandez" "Model"
process exec "Erin Hsu" "Production"
process exec "Räyya Gracy" "Production"
process exec "Advika Vuppala" "Hair & Makeup"
process exec "Vahini Walia" "Hair & Makeup"
process exec "Alycen Kim" "PR"
process exec "Stephanie Kim" "PR"
process exec "Aziza Norkulova" "Finance"

# Creative
echo ""
echo "--- Creative ---"
process creative "Garrett Lee" "Creative Director"
process creative "Michele Hratko" "Creative Director"
process creative "Melissa Qin" "Head of Print"
process creative "Sonya He" "Head of Print"
process creative "Deeptika Mandha" "Head of Motion"
process creative "Isabel Fleck" "Head of Motion"
process creative "Joy Leung" "Head of Set Design"
process creative "Yuktha Vemula" "Head of Set Design"
process creative "Serena Cai" "Head of Web"
process creative "Chieri Nnadozie" "Head of Photography"
process creative "Erin Hsu" "Head of Photography"
process creative "Erik Jiang" "Head of Cinematography"
process creative "Maddy Chen" "Head of Cinematography"
process creative "Amy Choi" "Print"
process creative "Audrey Zhao" "Print"
process creative "Cindy Tso" "Print"
process creative "Daniel Rios" "Print"
process creative "Maddie Philhower" "Print"
process creative "Sara Egan" "Print"
process creative "Jaden Scutero" "Motion"
process creative "Kai Okorodudu" "Motion"
process creative "Kyle Luo" "Motion"
process creative "Lailai Zhang" "Motion"
process creative "Rebecca Rotenberg" "Motion"
process creative "Shienka Martinez" "Motion"
process creative "Viviana Staicu" "Motion"
process creative "Xiao Yuan" "Motion"
process creative "Yutong Zhen" "Motion"
process creative "Amanda Qian" "Set Design"
process creative "Ava Han" "Set Design"
process creative "Bailey Ye" "Set Design"
process creative "Celina Poon" "Set Design"
process creative "Colleen Zhang" "Set Design"
process creative "Gabriela Romanelli" "Set Design"
process creative "Isa Paez-Pumar" "Set Design"
process creative "Julia Kasper" "Set Design"
process creative "Lillian Ren" "Set Design"
process creative "Renee Lin" "Set Design"
process creative "Russell Sang" "Set Design"
process creative "Saylor Frankel" "Set Design"
process creative "Stella Yang" "Set Design"
process creative "Bill Guo" "Web"
process creative "Brendon Lin" "Web"
process creative "Cheyu Tu" "Web"
process creative "Cody Lejang" "Web"
process creative "Jason Asiedu" "Web"
process creative "Jean Chen" "Web"
process creative "Lily Qin" "Web"
process creative "Yelim Kim" "Web"
process creative "AC Munger" "Photography"
process creative "Annie Zhang" "Photography"
process creative "Aren Framil" "Photography"
process creative "Chloe Lee" "Photography"
process creative "Claire Su" "Photography"
process creative "Coda Camaya" "Photography"
process creative "Eric Jiang" "Photography"
process creative "Grace Tang" "Photography"
process creative "Joy Ji" "Photography"
process creative "Lauren Cho" "Photography"
process creative "Maddy Ng" "Photography"
process creative "May Zhang" "Photography"
process creative "Yiwen Jiang" "Photography"
process creative "Chloe Lee" "Cinematography"
process creative "Daniel Mrsic" "Cinematography"
process creative "Leeloo Boublil" "Cinematography"
process creative "Mano Rajesh" "Cinematography"

# Design
echo ""
echo "--- Design ---"
process design "Mikayla Gee" "Head of Design"
process design "Aziza Norkulova" "Design Coordinator"
process design "Jason Asiedu" "Design Coordinator"
process design "Nataniella Essang" "Design Coordinator"
process design "Allen Chen" "Designer"
process design "Amy Cha" "Designer"
process design "Annie Marcelino" "Designer"
process design "Annissa Gao" "Designer"
process design "Ashley Dai" "Designer"
process design "Ashley Park" "Designer"
process design "Cara Moe" "Designer"
process design "Catherine Li" "Designer"
process design "Esther Lin" "Designer"
process design "Farah Daveau" "Designer"
process design "Frank Liu" "Designer"
process design "Jada Cho" "Designer"
process design "Jules Kwon" "Designer"
process design "Milada Kweon" "Designer"
process design "Nate Neira" "Designer"
process design "Raj Methi" "Designer"
process design "Sadie Han" "Designer"
process design "Sulli Yatabe" "Designer"
process design "Sydney Lee" "Designer"
process design "Tianze Zhou" "Designer"
process design "Yubo Zhang" "Designer"
process design "Zachary Yoshida" "Designer"

# Production
echo ""
echo "--- Production ---"
process production "Erin Hsu" "Head of Production"
process production "Räyya Gracy" "Head of Production"
process production "Katherine Wang" "Head of Sound Design"
process production "Lydia Synn Box" "Head of Box Office"
process production "Yujin Lee" "Head of Livestream"
process production "Hannah Chen" "Stage Manager"
process production "Jioh Kim" "Stage Manager"
process production "JP Evans" "Stage Manager"
process production "Payton Larson" "Stage Manager"
process production "Charles Chen" "Sound Designer"
process production "Jungho Chang" "Sound Designer"
process production "Rowan Sullivan" "Sound Designer"
process production "Ryan Zhang" "Sound Designer"
process production "Samyukta Athreya" "Sound Designer"
process production "Sean Xue" "Sound Designer"
process production "Vicky Yan" "Sound Designer"
process production "Winn Sermkitpisahn" "Sound Designer"
process production "Woody Li" "Sound Designer"
process production "Rithanya Senthilvel" "Production Hand"
process production "Harshitha Bharghava" "Lighting Designer"
process production "Sophie Ding" "Lighting Designer"
process production "Brandon Marcial" "Box Office Team"
process production "Guanyi Zhao" "Box Office Team"
process production "Isha Patel" "Box Office Team"
process production "Ivy Wang" "Box Office Team"
process production "Sierra Dickert" "Box Office Team"
process production "Ava Han" "Livestream"
process production "Helen Fu" "Livestream"
process production "Ishaan Singh" "Livestream"
process production "Leeloo Boublil" "Livestream"

# Model
echo ""
echo "--- Model ---"
process model "Destini Brown-Greene" "Head of Model"
process model "Marissa Fernandez" "Head of Model"
process model "Tim Kim" "Model Coordinator"
process model "Vicky Yan" "Model Coordinator"
process model "Abhay Kadambi" "Model"
process model "Ahri Guity" "Model"
process model "Deeptika Mandha" "Model"
process model "Emma DiPrima" "Model"
process model "Frank Liu" "Model"
process model "Joyce Lam" "Model"
process model "Katherine Wang" "Model"
process model "Luke Wang" "Model"
process model "Nshera Boateng" "Model"
process model "Rouzhi Wang" "Model"
process model "Safiya Stewart" "Model"
process model "Serena Luo" "Model"
process model "Sofia Pfaltzgraff" "Model"
process model "Sofia Saab" "Model"
process model "Yara Samad" "Model"

# Hair & Makeup
echo ""
echo "--- Hair & Makeup ---"
process hairmakeup "Advika Vuppala" "Head"
process hairmakeup "Vahini Walia" "Head"
process hairmakeup "Alyssa Kwon" "Artist"
process hairmakeup "Annika Kuhl" "Artist"
process hairmakeup "Ashanti Ramirez" "Artist"
process hairmakeup "Emma Zhao" "Artist"
process hairmakeup "Harshini Kotaru" "Artist"
process hairmakeup "Naza Monjur" "Artist"
process hairmakeup "Zaina Saif" "Artist"

# PR
echo ""
echo "--- PR ---"
process pr "Alycen Kim" "Head of PR"
process pr "Stephanie Kim" "Head of PR"
process pr "Cassie May" "Subhead"
process pr "Olivia Acquaah-Harrison" "Subhead"
process pr "Harshini Kotaru" "PR Team"
process pr "Ishaan Singh" "PR Team"
process pr "Lilly Song" "PR Team"
process pr "Lydia Synn" "PR Team"
process pr "Manasa Karthik" "PR Team"
process pr "Riya Kinny" "PR Team"
process pr "Sofia Chen" "PR Team"
process pr "Vicky Chen" "PR Team"
process pr "Vivian Nam" "PR Team"

echo ""
echo "=== Done! ==="
