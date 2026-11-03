import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.studentInfo}>
        <View style={styles.photoContainer}>
          <Image source={{ uri: photoUrl }} style={styles.photo} />
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.year}>{year}</Text>

          <View style={styles.yearBadge}>
            <Text style={styles.badgeText}>Student</Text>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.button,
          flagged ? styles.flaggedButton : styles.normalButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={[styles.buttonText, flagged && styles.flaggedButtonText]}>
          {flagged ? "★ Flagged" : "☆ Flag for Advising"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginBottom: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#F8C8D9",
    shadowColor: "#C94F7C",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },

  studentInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  photoContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: "#FCE4EC",
    padding: 3,
    borderWidth: 2,
    borderColor: "#E88EAF",
  },

  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },

  details: {
    flex: 1,
    marginLeft: 14,
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#49243A",
  },

  year: {
    fontSize: 14,
    color: "#9B7185",
    marginTop: 4,
  },

  yearBadge: {
    backgroundColor: "#FCE4EC",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 7,
  },

  badgeText: {
    color: "#C44575",
    fontSize: 11,
    fontWeight: "600",
  },

  button: {
    marginTop: 15,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
  },

  normalButton: {
    backgroundColor: "#FFF0F5",
    borderColor: "#E88EAF",
  },

  flaggedButton: {
    backgroundColor: "#D94F83",
    borderColor: "#D94F83",
  },

  pressedButton: {
    opacity: 0.65,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#C44575",
  },

  flaggedButtonText: {
    color: "#FFFFFF",
  },
});
