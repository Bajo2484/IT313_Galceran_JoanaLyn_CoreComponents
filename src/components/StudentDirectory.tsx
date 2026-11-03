import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import StudentCard from "./StudentCard";

const initialStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
    flagged: true,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
    flagged: true,
  },
];

export default function StudentDirectory() {
  // States
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  // Toggle student flag
  const toggleFlag = (id: string) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  // Search filtering
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <TextInput
        placeholder="Search student by name..."
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
      />

      <ScrollView>
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={() => toggleFlag(student.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  searchInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
});
